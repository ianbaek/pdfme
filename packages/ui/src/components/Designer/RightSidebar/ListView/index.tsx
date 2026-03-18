import React, { useContext, useState } from 'react';
import type { SidebarProps } from '../../../../types.js';
import { DESIGNER_CLASSNAME } from '../../../../constants.js';
import { I18nContext } from '../../../../contexts.js';
import { Input, Typography, Button, List } from 'antd';
import SelectableSortableContainer from './SelectableSortableContainer.js';
import { SidebarBody, SidebarFooter, SidebarFrame, SidebarHeader } from '../layout.js';

const { Text } = Typography;
const { TextArea } = Input;

const ListView = (
  props: Pick<
    SidebarProps,
    | 'schemas'
    | 'onSortEnd'
    | 'onEdit'
    | 'hoveringSchemaId'
    | 'onChangeHoveringSchemaId'
    | 'changeSchemas'
    | 'availableFields'
    | 'usedFieldNames'
    | 'addSchema'
  >,
) => {
  const {
    schemas,
    onSortEnd,
    onEdit,
    hoveringSchemaId,
    onChangeHoveringSchemaId,
    changeSchemas,
    availableFields,
    usedFieldNames,
    addSchema,
  } = props;
  const i18n = useContext(I18nContext);
  const [isBulkUpdateFieldNamesMode, setIsBulkUpdateFieldNamesMode] = useState(false);
  const [showAvailableFields, setShowAvailableFields] = useState(false);
  const [fieldNamesValue, setFieldNamesValue] = useState('');

  const commitBulk = () => {
    const names = fieldNamesValue.split('\n');
    if (names.length !== schemas.length) {
      alert(i18n('errorBulkUpdateFieldName'));
    } else {
      changeSchemas(
        names.map((value, index) => ({
          key: 'name',
          value,
          schemaId: schemas[index].id,
        })),
      );
      setIsBulkUpdateFieldNamesMode(false);
    }
  };

  const startBulk = () => {
    setFieldNamesValue(schemas.map((s) => s.name).join('\n'));
    setIsBulkUpdateFieldNamesMode(true);
  };

  const handleAddDynamicField = (fieldData: string | { name: string; type: string; [key: string]: unknown }) => {
    if (addSchema) {
      // Create a new field with the dynamic field data
      const fieldName = typeof fieldData === 'string' ? fieldData : fieldData.name;
      const fieldType = typeof fieldData === 'string' ? 'text' : fieldData.type;
      
      // Create a schema object for the new field
      const newSchema = {
        name: fieldName,
        __preserveName: true,
        type: fieldType,
        content: fieldName,
        position: { x: 20, y: 20 },
        width: 45,
        height: 10,
        ...(typeof fieldData !== 'string' ? fieldData : {})
      };
      
      // Add the schema using the addSchema function
      addSchema(newSchema);
      
      // Close the available fields dropdown
      setShowAvailableFields(false);
    }
  };

  return (
    <SidebarFrame className={DESIGNER_CLASSNAME + 'list-view'}>
      <SidebarHeader>
        <Text strong style={{ textAlign: 'center', width: '100%' }}>
          {showAvailableFields ? i18n('availableDynamicFields') : i18n('fieldsList')}
        </Text>
      </SidebarHeader>
      <SidebarBody>
        {isBulkUpdateFieldNamesMode ? (
          <TextArea
            wrap="off"
            value={fieldNamesValue}
            onChange={(e) => setFieldNamesValue(e.target.value)}
            style={{
              height: '100%',
              width: '100%',
              resize: 'none',
              lineHeight: '2.75rem',
            }}
          />
        ) : showAvailableFields && Array.isArray(availableFields) && availableFields.length > 0 ? (
          <div style={{ overflowY: 'auto' }}>
            <List
              size="small"
              dataSource={availableFields}
              renderItem={(fieldData) => {
                const fieldName = typeof fieldData === 'string' ? fieldData : fieldData.name;
                const isUsed = usedFieldNames?.includes(fieldName);
                return (
                  <List.Item
                    style={{
                      opacity: isUsed ? 0.5 : 1,
                      cursor: !isUsed ? 'pointer' : 'default',
                      padding: '0.25rem 1rem',
                    }}
                    onClick={() => {
                      if (!isUsed) {
                        handleAddDynamicField(fieldData);
                      }
                    }}
                  >
                    <div>
                      {fieldName}
                      {isUsed && (
                        <Text type="secondary" style={{ marginLeft: '0.5rem', fontSize: '0.8rem' }}>
                          ({i18n('alreadyUsed') || 'already used'})
                        </Text>
                      )}
                    </div>
                  </List.Item>
                );
              }}
            />
          </div>
        ) : (
          <>
            <SelectableSortableContainer
              schemas={schemas}
              hoveringSchemaId={hoveringSchemaId}
              onChangeHoveringSchemaId={onChangeHoveringSchemaId}
              onSortEnd={onSortEnd}
              onEdit={onEdit}
            />
          </>
        )}
      </SidebarBody>
      <SidebarFooter>
        {isBulkUpdateFieldNamesMode ? (
          <>
            <Button
              className={DESIGNER_CLASSNAME + 'bulk-commit'}
              size="small"
              type="text"
              onClick={commitBulk}
            >
              <u> {i18n('commitBulkUpdateFieldName')}</u>
            </Button>
            <span>/</span>
            <Button
              className={DESIGNER_CLASSNAME + 'bulk-cancel'}
              size="small"
              type="text"
              onClick={() => setIsBulkUpdateFieldNamesMode(false)}
            >
              <u> {i18n('cancel')}</u>
            </Button>
          </>
        ) : (
          <>
            {Array.isArray(availableFields) && availableFields.length > 0 && (
              <>
                <Button
                  className={DESIGNER_CLASSNAME + 'available-fields'}
                  size="small"
                  type="text"
                  onClick={() => setShowAvailableFields(!showAvailableFields)}
                >
                  <u>{i18n('availableDynamicFields')}</u>
                </Button>
                <span>/</span>
              </>
            )}
            <Button
              className={DESIGNER_CLASSNAME + 'bulk-update'}
              size="small"
              type="text"
              onClick={startBulk}
            >
              <u> {i18n('bulkUpdateFieldName')}</u>
            </Button>
          </>
        )}
      </SidebarFooter>
    </SidebarFrame>
  );
};

export default ListView;
