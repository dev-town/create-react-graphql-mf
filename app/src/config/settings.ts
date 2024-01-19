import packageJson from '../../package.json';

export const module = packageJson.name;

export const moduleSettings = {
    module,
    // List of supported interops that this component can provide
    supportedInterops: [] as const,
}