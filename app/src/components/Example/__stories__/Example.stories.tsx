/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StoryObj, Meta } from '@storybook/react'

import { Example } from '../index';

export default {
    title: 'Components/Example',
    component: Example,
    args: {
        children: 'Example',
    },
    parameters: {
        docs: {
            description: {
                component: 'Please replace this default description',
            },
        },
    },
} as Meta;

const Template: StoryObj<typeof Example> = {
    render: (args) => {
        return <Example {...args} />
    }
};

export const Primary = {
    ...Template,
    args: {},
}