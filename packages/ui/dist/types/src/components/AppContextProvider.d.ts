import React from 'react';
import type { Plugins, Font, Lang, UIOptions } from '@pdfme/common';
type Props = {
    children: React.ReactNode;
    lang: Lang;
    font: Font;
    plugins: Plugins;
    options: UIOptions;
};
declare const AppContextProvider: ({ children, lang, font, plugins, options }: Props) => React.JSX.Element;
export default AppContextProvider;
