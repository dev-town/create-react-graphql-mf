module.exports = {
    stories: ['./**/*.stories.mdx', '../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
    typescript: {
        check: true,
    },
    feature: {
        previewMdx2: true,
    },
    core: {
        disableTelemetry: true,
    },
    staticDirs: ['./public'],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: true,
        defaultName: 'Documentation',
    }
};
