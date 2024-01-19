/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { screen, within } from '@testing-library/react';

import { renderWithProviders } from '../../../../testHelpers';
import { Example } from '../index';

const setup = (additionalProps = {}) => {
    const utils = renderWithProviders(<Example {...additionalProps}><div>Example</div></Example>);
    return {
        ...utils,
    };
};

it('renders component', async () => {
    setup();
    expect(await screen.findAllByText('Example mock content'));
    expect(await within(screen.getByRole('heading')).findByText('Example Component'));
});

it('has data-testid', async () => {
    setup();
    expect(await screen.findAllByText('Example mock content'));
    expect(await screen.findByTestId('example'));
});
