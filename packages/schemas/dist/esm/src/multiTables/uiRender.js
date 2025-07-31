import { px2mm } from '@pdfme/common';
import { createSingleTable } from './tableHelper.js';
import { getBodyWithRange } from './helper.js';
import cell from './cell.js';
const columnButtonSize = 24;
const buttonSize = 30;
function createButton(options) {
    const button = document.createElement('button');
    button.style.width = `${options.width}px`;
    button.style.height = `${options.height}px`;
    button.style.position = 'absolute';
    button.style.top = options.top;
    button.style.cursor = 'pointer';
    if (options.left !== undefined) {
        button.style.left = options.left;
    }
    if (options.right !== undefined) {
        button.style.right = options.right;
    }
    button.innerText = options.text;
    button.onclick = options.onClick;
    return button;
}
const cellUiRender = cell.ui;
const convertToCellStyle = (styles) => ({
    fontName: styles.fontName,
    alignment: styles.alignment,
    verticalAlignment: styles.verticalAlignment,
    fontSize: styles.fontSize,
    lineHeight: styles.lineHeight,
    characterSpacing: styles.characterSpacing,
    backgroundColor: styles.backgroundColor,
    // ---
    fontColor: styles.textColor,
    borderColor: styles.lineColor,
    borderWidth: styles.lineWidth,
    padding: styles.cellPadding,
});
const calcResizedHeadWidthPercentages = (arg) => {
    const { currentHeadWidthPercentages, currentHeadWidths, changedHeadWidth, changedHeadIndex } = arg;
    const headWidthPercentages = [...currentHeadWidthPercentages];
    const totalWidth = currentHeadWidths.reduce((a, b) => a + b, 0);
    const changedWidthPercentage = (changedHeadWidth / totalWidth) * 100;
    const originalNextWidthPercentage = headWidthPercentages[changedHeadIndex + 1] ?? 0;
    const adjustment = headWidthPercentages[changedHeadIndex] - changedWidthPercentage;
    headWidthPercentages[changedHeadIndex] = changedWidthPercentage;
    if (changedHeadIndex + 1 < headWidthPercentages.length) {
        headWidthPercentages[changedHeadIndex + 1] = originalNextWidthPercentage + adjustment;
    }
    return headWidthPercentages;
};
const setBorder = (div, borderPosition, arg) => {
    div.style[`border${borderPosition}`] = `${String(arg.schema.tableStyles.borderWidth)}mm solid ${arg.schema.tableStyles.borderColor}`;
};
const drawBorder = (div, row, colIndex, rowIndex, rowsLength, arg, isLastTable = true) => {
    const isFirstColumn = colIndex === 0;
    const isLastColumn = colIndex === Object.values(row.cells).length - 1;
    const isLastRow = rowIndex === rowsLength - 1;
    if (row.section === 'head') {
        setBorder(div, 'Top', arg);
        if (isFirstColumn)
            setBorder(div, 'Left', arg);
        if (isLastColumn)
            setBorder(div, 'Right', arg);
    }
    else {
        if (isFirstColumn)
            setBorder(div, 'Left', arg);
        if (isLastColumn)
            setBorder(div, 'Right', arg);
        // Draw bottom border only for last table in group
        if (isLastRow && isLastTable) {
            setBorder(div, 'Bottom', arg);
        }
    }
};
const renderRowUi = (args) => {
    const { rows, arg, onChangeEditingPosition, offsetY = 0, editingPosition, tableIndex, tables, isLastTable = true } = args;
    let rowOffsetY = offsetY;
    rows.forEach((row, rowIndex) => {
        const { cells, height, section } = row;
        let colOffsetX = 0;
        Object.values(cells).forEach((cell, colIndex) => {
            const div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.top = `${rowOffsetY}mm`;
            div.style.left = `${colOffsetX}mm`;
            div.style.width = `${cell.width}mm`;
            div.style.height = `${cell.height}mm`;
            div.style.boxSizing = 'border-box';
            drawBorder(div, row, colIndex, rowIndex, rows.length, arg, isLastTable);
            div.style.cursor =
                arg.mode === 'designer' || (arg.mode === 'form' && section === 'body') ? 'text' : 'default';
            div.addEventListener('click', () => {
                if (arg.mode === 'viewer')
                    return;
                onChangeEditingPosition({ rowIndex, colIndex });
            });
            arg.rootElement.appendChild(div);
            const isEditing = editingPosition.rowIndex === rowIndex &&
                editingPosition.colIndex === colIndex &&
                editingPosition.tableIndex === tableIndex;
            let mode = 'viewer';
            if (arg.mode === 'form') {
                mode = section === 'body' && isEditing && !arg.schema.readOnly ? 'designer' : 'viewer';
            }
            else if (arg.mode === 'designer') {
                mode = isEditing ? 'designer' : 'form';
            }
            void cellUiRender({
                ...arg,
                stopEditing: () => {
                    if (arg.mode === 'form') {
                        resetEditingPosition();
                    }
                },
                mode,
                onChange: (v) => {
                    if (!arg.onChange)
                        return;
                    const newValue = (Array.isArray(v) ? v[0].value : v.value);
                    if (section === 'body') {
                        // Optimized: Direct array access without JSON.parse/stringify
                        const currentContent = JSON.parse(arg.value || '[]');
                        const startRange = arg.schema.__bodyRange?.start ?? 0;
                        const actualRowIndex = rowIndex + startRange;
                        // Optimized: Use tableIndex directly instead of calculating offset
                        let actualColIndex = colIndex;
                        if (tableIndex !== undefined && tables) {
                            // Pre-calculate offset only once
                            let colOffset = 0;
                            for (let i = 0; i < tableIndex; i++) {
                                colOffset += tables[i].head.length;
                            }
                            actualColIndex = colOffset + colIndex;
                        }
                        // Direct array mutation for better performance
                        currentContent[actualRowIndex][actualColIndex] = newValue;
                        arg.onChange({ key: 'content', value: JSON.stringify(currentContent) });
                    }
                    else {
                        // Optimized: Direct table update without unnecessary array copy
                        const currentTables = arg.schema.tables || [];
                        if (tableIndex !== undefined && tables) {
                            // Direct mutation of the specific table
                            const targetTable = currentTables[tableIndex];
                            targetTable.head[colIndex] = newValue;
                            arg.onChange({ key: 'tables', value: currentTables });
                        }
                        else {
                            // Fallback: Find table index (only when tableIndex is not provided)
                            let foundTableIndex = 0;
                            let colOffset = 0;
                            for (let i = 0; i < currentTables.length; i++) {
                                if (colIndex >= colOffset && colIndex < colOffset + currentTables[i].head.length) {
                                    foundTableIndex = i;
                                    break;
                                }
                                colOffset += currentTables[i].head.length;
                            }
                            const actualColIndex = colIndex - colOffset;
                            currentTables[foundTableIndex].head[actualColIndex] = newValue;
                            arg.onChange({ key: 'tables', value: currentTables });
                        }
                    }
                },
                value: typeof cell.raw === 'string' ? cell.raw : (cell.raw?.type === 'image' ? '[Image]' : cell.raw?.type ? `[${cell.raw.type}]` : ''),
                placeholder: '',
                rootElement: div,
                schema: {
                    name: '',
                    type: 'cell',
                    content: typeof cell.raw === 'string' ? cell.raw : (cell.raw?.type === 'image' ? '[Image]' : cell.raw?.type ? `[${cell.raw.type}]` : ''),
                    position: { x: colOffsetX, y: rowOffsetY },
                    width: cell.width,
                    height: cell.height,
                    ...convertToCellStyle(cell.styles),
                },
            });
            colOffsetX += cell.width;
        });
        rowOffsetY += height;
    });
};
// Store editing positions for head and body separately (like tables)
const headEditingPosition = { rowIndex: -1, colIndex: -1, tableIndex: -1 };
const bodyEditingPosition = { rowIndex: -1, colIndex: -1, tableIndex: -1 };
const resetEditingPosition = () => {
    headEditingPosition.rowIndex = -1;
    headEditingPosition.colIndex = -1;
    headEditingPosition.tableIndex = -1;
    bodyEditingPosition.rowIndex = -1;
    bodyEditingPosition.colIndex = -1;
    bodyEditingPosition.tableIndex = -1;
};
export const uiRender = async (arg) => {
    const { rootElement, onChange, schema, value, mode } = arg;
    const bodyWidthRange = getBodyWithRange(value, schema.__bodyRange);
    const tables = schema.tables || [];
    rootElement.innerHTML = '';
    let currentY = 0;
    const tableGroupSpacing = schema.tableGroupSpacing || 5; // Spacing between table groups
    // For each row in content data, render all tables
    for (let rowIndex = 0; rowIndex < bodyWidthRange.length; rowIndex++) {
        const rowData = bodyWidthRange[rowIndex];
        // Split row data for each table based on their column counts
        let dataIndex = 0;
        for (let tableIndex = 0; tableIndex < tables.length; tableIndex++) {
            const singleTable = tables[tableIndex];
            const columnCount = singleTable.head.length;
            const tableRowData = rowData.slice(dataIndex, dataIndex + columnCount);
            // Create table schema for rendering
            const tableSchema = {
                ...schema,
                showHead: singleTable.showHead,
                head: singleTable.head,
                headWidthPercentages: singleTable.headWidthPercentages,
            };
            // Create table with single row data
            const table = await createSingleTable([tableRowData], { ...arg, schema: tableSchema }, tables.indexOf(singleTable));
            // Set table position
            table.settings.startY = currentY;
            const showHead = table.settings.showHead;
            const handleChangeEditingPosition = (newPosition, editingPosition) => {
                resetEditingPosition();
                editingPosition.rowIndex = newPosition.rowIndex;
                editingPosition.colIndex = newPosition.colIndex;
                editingPosition.tableIndex = tableIndex;
                void uiRender(arg);
            };
            // Determine if this is the first or last table in the group
            const isLastTable = tableIndex === tables.length - 1;
            if (showHead) {
                renderRowUi({
                    rows: table.head,
                    arg,
                    editingPosition: headEditingPosition,
                    onChangeEditingPosition: (p) => handleChangeEditingPosition(p, headEditingPosition),
                    offsetY: currentY,
                    tableIndex,
                    tables,
                    isLastTable,
                });
            }
            const bodyOffsetY = currentY + (showHead ? table.getHeadHeight() : 0);
            renderRowUi({
                rows: table.body,
                arg,
                editingPosition: bodyEditingPosition,
                onChangeEditingPosition: (p) => {
                    handleChangeEditingPosition(p, bodyEditingPosition);
                },
                offsetY: bodyOffsetY,
                tableIndex,
                tables,
                isLastTable,
            });
            // Add column resize handles for each table in designer mode
            if (mode === 'designer' && onChange) {
                let offsetX = 0;
                table.columns.forEach((column, i, columns) => {
                    if (columns.length === 1)
                        return;
                    offsetX = offsetX + column.width;
                    if (i === table.columns.length - 1)
                        return;
                    const dragHandle = document.createElement('div');
                    const lineWidth = 5;
                    dragHandle.style.width = `${lineWidth}px`;
                    dragHandle.style.height = `${table.getHeight()}mm`; // Use individual table height
                    dragHandle.style.backgroundColor = '#eee';
                    dragHandle.style.opacity = '0.5';
                    dragHandle.style.cursor = 'col-resize';
                    dragHandle.style.position = 'absolute';
                    dragHandle.style.zIndex = '10';
                    dragHandle.style.left = `${offsetX - px2mm(lineWidth) / 2}mm`;
                    dragHandle.style.top = `${currentY}mm`;
                    const setColor = (e) => {
                        const handle = e.target;
                        handle.style.backgroundColor = '#2196f3';
                    };
                    const resetColor = (e) => {
                        const handle = e.target;
                        handle.style.backgroundColor = '#eee';
                    };
                    dragHandle.addEventListener('mouseover', setColor);
                    dragHandle.addEventListener('mouseout', resetColor);
                    const prevColumnLeft = offsetX - column.width;
                    const nextColumnRight = offsetX - px2mm(lineWidth) + table.columns[i + 1].width;
                    dragHandle.addEventListener('mousedown', (e) => {
                        resetEditingPosition();
                        const handle = e.target;
                        dragHandle.removeEventListener('mouseover', setColor);
                        dragHandle.removeEventListener('mouseout', resetColor);
                        let move = 0;
                        const mouseMove = (e) => {
                            let moveX = e.movementX;
                            const currentLeft = Number(handle.style.left.replace('mm', ''));
                            let newLeft = currentLeft + moveX;
                            if (newLeft < prevColumnLeft) {
                                newLeft = prevColumnLeft;
                                moveX = newLeft - currentLeft;
                            }
                            if (newLeft >= nextColumnRight) {
                                newLeft = nextColumnRight;
                                moveX = newLeft - currentLeft;
                            }
                            handle.style.left = `${newLeft}mm`;
                            move += moveX;
                        };
                        rootElement.addEventListener('mousemove', mouseMove);
                        const commitResize = () => {
                            if (move !== 0) {
                                const newTables = [...tables];
                                const newHeadWidthPercentages = calcResizedHeadWidthPercentages({
                                    currentHeadWidthPercentages: singleTable.headWidthPercentages,
                                    currentHeadWidths: table.columns.map((column) => column.width),
                                    changedHeadWidth: table.columns[i].width + move,
                                    changedHeadIndex: i,
                                });
                                newTables[tableIndex] = {
                                    ...singleTable,
                                    headWidthPercentages: newHeadWidthPercentages,
                                };
                                onChange({ key: 'tables', value: newTables });
                            }
                            move = 0;
                            dragHandle.addEventListener('mouseover', setColor);
                            dragHandle.addEventListener('mouseout', resetColor);
                            rootElement.removeEventListener('mousemove', mouseMove);
                            rootElement.removeEventListener('mouseup', commitResize);
                        };
                        rootElement.addEventListener('mouseup', commitResize);
                    });
                    rootElement.appendChild(dragHandle);
                });
            }
            // Add remove column buttons for this table in designer mode
            if (mode === 'designer' && onChange) {
                let offsetX = 0;
                singleTable.head.forEach((head, colIndex) => {
                    if (singleTable.head.length === 1)
                        return;
                    // Calculate actual column width based on table width and percentage
                    const columnWidth = (schema.width * singleTable.headWidthPercentages[colIndex]) / 100;
                    offsetX += columnWidth;
                    const removeColumnButton = createButton({
                        width: columnButtonSize,
                        height: columnButtonSize,
                        top: `${currentY}mm`,
                        left: `${offsetX - px2mm(columnButtonSize)}mm`,
                        text: '-',
                        onClick: () => {
                            const totalWidthMinusRemoved = singleTable.headWidthPercentages.reduce((sum, width, j) => (j !== colIndex ? sum + width : sum), 0);
                            const newTables = [...tables];
                            newTables[tableIndex] = {
                                ...singleTable,
                                head: singleTable.head.filter((_, j) => j !== colIndex),
                                headWidthPercentages: singleTable.headWidthPercentages
                                    .filter((_, j) => j !== colIndex)
                                    .map((width) => (width / totalWidthMinusRemoved) * 100),
                            };
                            // Update content by removing the deleted column's data
                            const currentContent = JSON.parse(value || '[]');
                            const updatedContent = currentContent.map(row => {
                                // Calculate the position where the deleted column starts
                                let deleteStartPosition = 0;
                                for (let i = 0; i < tableIndex; i++) {
                                    deleteStartPosition += tables[i].head.length;
                                }
                                // Remove the deleted column's data
                                const newRow = [...row];
                                newRow.splice(deleteStartPosition + colIndex, 1);
                                return newRow;
                            });
                            onChange([
                                { key: 'tables', value: newTables },
                                { key: 'content', value: JSON.stringify(updatedContent) }
                            ]);
                        },
                    });
                    rootElement.appendChild(removeColumnButton);
                });
            }
            // Add table delete button for this table in designer mode (only for first row and if more than one table)
            if (mode === 'designer' && onChange && rowIndex === 0 && tables.length > 1) {
                const deleteTableButton = createButton({
                    width: buttonSize,
                    height: buttonSize,
                    top: `${currentY + (showHead ? table.getHeadHeight() : 0)}mm`, // Position next to table body (after header)
                    right: `-${buttonSize}px`, // Position to the right of add column button
                    text: '-',
                    onClick: () => {
                        const newTables = tables.filter((_, index) => index !== tableIndex);
                        // Update content by removing the deleted table's columns
                        const currentContent = JSON.parse(value || '[]');
                        const updatedContent = currentContent.map(row => {
                            // Calculate the position where the deleted table starts
                            let deleteStartPosition = 0;
                            for (let i = 0; i < tableIndex; i++) {
                                deleteStartPosition += tables[i].head.length;
                            }
                            // Remove the deleted table's columns
                            const newRow = [...row];
                            const deletedTable = tables[tableIndex];
                            newRow.splice(deleteStartPosition, deletedTable.head.length);
                            return newRow;
                        });
                        onChange([{ key: 'tables', value: newTables }, { key: 'content', value: JSON.stringify(updatedContent) }]);
                    },
                });
                rootElement.appendChild(deleteTableButton);
            }
            // Add column buttons for this table in designer mode
            if (mode === 'designer' && onChange) {
                const addColumnButton = createButton({
                    width: columnButtonSize,
                    height: columnButtonSize,
                    top: `${currentY}mm`,
                    right: `-${columnButtonSize}px`, // Move closer to columns
                    text: '+',
                    onClick: (e) => {
                        e.preventDefault();
                        const newColumnWidthPercentage = 25;
                        const totalCurrentWidth = singleTable.headWidthPercentages.reduce((acc, width) => acc + width, 0);
                        const scalingRatio = (100 - newColumnWidthPercentage) / totalCurrentWidth;
                        const scaledWidths = singleTable.headWidthPercentages.map((width) => width * scalingRatio);
                        const newTables = [...tables];
                        newTables[tableIndex] = {
                            ...singleTable,
                            head: singleTable.head.concat(`Head ${singleTable.head.length + 1}`),
                            headWidthPercentages: scaledWidths.concat(newColumnWidthPercentage),
                        };
                        // Update content by adding empty string for the new column
                        const currentContent = JSON.parse(value || '[]');
                        const updatedContent = currentContent.map(row => {
                            // Calculate the position where the new column should be inserted
                            let insertPosition = 0;
                            for (let i = 0; i < tableIndex; i++) {
                                insertPosition += tables[i].head.length;
                            }
                            // Insert empty string for the new column
                            const newRow = [...row];
                            newRow.splice(insertPosition + singleTable.head.length, 0, '');
                            return newRow;
                        });
                        onChange([
                            { key: 'tables', value: newTables },
                            { key: 'content', value: JSON.stringify(updatedContent) }
                        ]);
                    },
                });
                rootElement.appendChild(addColumnButton);
            }
            // Move to next table position
            const tableHeight = table.getHeight();
            currentY += tableHeight; // No spacing between tables in the same group
            dataIndex += columnCount;
        }
        // Add spacing between table groups, except for the last row
        if (rowIndex < bodyWidthRange.length - 1) {
            currentY += tableGroupSpacing;
        }
    }
    // Update schema height based on total calculated height
    if (onChange) {
        if (schema.height !== currentY) {
            onChange({ key: 'height', value: currentY });
        }
    }
    // Add table management buttons for designer mode
    if (mode === 'designer' && onChange) {
        // Add table button
        const addTableButton = createButton({
            width: buttonSize,
            height: buttonSize,
            top: `${currentY}mm`,
            left: `calc(50% - ${buttonSize / 2}px)`,
            text: '+',
            onClick: () => {
                const newTable = {
                    showHead: true,
                    head: ['New Column'],
                    headWidthPercentages: [100],
                };
                const newTables = [...tables, newTable];
                // Update content by adding empty strings for the new table
                const currentContent = JSON.parse(value || '[]');
                const updatedContent = currentContent.map(row => {
                    // Calculate the position where the new table should be inserted
                    let insertPosition = 0;
                    for (let i = 0; i < tables.length; i++) {
                        insertPosition += tables[i].head.length;
                    }
                    // Insert empty strings for the new table's columns
                    const newRow = [...row];
                    for (let i = 0; i < newTable.head.length; i++) {
                        newRow.splice(insertPosition + i, 0, '');
                    }
                    return newRow;
                });
                onChange([{ key: 'tables', value: newTables }, { key: 'content', value: JSON.stringify(updatedContent) }]);
            },
        });
        rootElement.appendChild(addTableButton);
    }
};
//# sourceMappingURL=uiRender.js.map