import React from 'react';
import { Preview } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import { I18nextProvider } from 'react-i18next';

import { Provider } from './apollo';
import { ThemeProvider } from './theme';
import { module } from '../src/config/settings';

import i18n from './i18next';

const preview: Preview = {
    decorators: [withRouter, (Story, context) => {

        return (
            <div>
                <I18nextProvider i18n={i18n} defaultNS={module}>
                    <ThemeProvider>
                        <Provider>
                            <Story />
                        </Provider>
                    </ThemeProvider>
                </I18nextProvider>
            </div>
        );
    }]
}

export const parameters = {
    reactRouter: {
        // ...
    }
}

export default preview;