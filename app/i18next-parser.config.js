module.exports = {
    defaultNamespace: 'module',
    locales: ['en-gb'],
    output: 'i18n/$LOCALE/$NAMESPACE.json',
    input: 'src/**/*.{js,ts,tsx}',
    sort: true,
    keepRemoved: true,
}