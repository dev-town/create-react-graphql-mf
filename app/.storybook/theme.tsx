import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

// Typically this theme will be imported from a external component lib.

export const theme = {
    main: "mediumseagreen"
};

export type Theme = typeof theme;

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
    return (
        <div>
            <SCThemeProvider theme={theme}>
                {children}
            </SCThemeProvider>
        </div>
    );
};