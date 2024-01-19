import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ApolloProvider } from '@apollo/client';

import { generateApolloClient, ApolloMocks } from './apolloClient';
import { I18nextProvider } from 'react-i18next';

import i18n from '../.storybook/i18next';

export interface Mocks extends ApolloMocks {};

const Core: React.FC<{ children: any }> = ({ children }) => {
    return <div>{children}</div>
};

export const renderWithProviders = (component: React.ReactElement, mocks?: Mocks) => {
    const client = generateApolloClient(mocks);
    return render(
        <I18nextProvider i18n={i18n}>
            <ApolloProvider client={client}><Core>{component}</Core></ApolloProvider>
        </I18nextProvider>
    );
};

export const testRendererWithProviders = (component: React.ReactElement, mocks?: Mocks) => {
    const client = generateApolloClient(mocks);
    return renderer.create(<ApolloProvider client={client}><Core>{component}</Core></ApolloProvider>);
};

export const resizeWindow = (width: number, height: number) => {
    // eslint-disable-next-line no-undef
    window = Object.assign(window, { innerWidth: width, innerHeight: height });
    // eslint-disable-next-line no-undef
    window.dispatchEvent(new Event('resize'));
    // eslint-disable-next-line no-undef
    fireEvent(window, new Event('resize'));
};
