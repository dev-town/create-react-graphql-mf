import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pluginJson from '@rollup/plugin-json';

const packageJson = require('./package.json');

const extensions = ['.ts', '.tsx'];
const babelRuntimeVersion = packageJson.dependencies['@babel/runtime'].replace(/^[^0-9]*/, '');

const makeExternalPredicate = (externalArr) => {
    if (externalArr.length === 0) {
        return () => false;
    }
    const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
    return (id) => pattern.test(id);
};

export default [
    // CommonJS
    {
        input: 'src/index.ts',
        output: { file: 'lib/index.js', format: 'cjs', indent: false, sourcemap: true },
        external: makeExternalPredicate([
            ...Object.keys(packageJson.dependencies || {}),
            ...Object.keys(packageJson.peerDependencies || {}),
        ]),
        plugins: [
            terser(),
            pluginJson(),
            commonjs({
                ignoreGlobal: true,
                include: /\/node_modules\//,
            }),
            nodeResolve({ extensions }),
            typescript({
                useTsconfigDeclarationDir: true,
                clean: true,
            }),
            babel({
                extensions,
                babelHelpers: 'runtime',
                plugins: [['@babel/plugin-transform-runtime', { version: babelRuntimeVersion }]],
            }),
        ],
    },
    // ES
    {
        input: 'src/index.ts',
        output: { file: 'es/index.js', format: 'es', indent: false },
        external: makeExternalPredicate([
            ...Object.keys(packageJson.dependencies || {}),
            ...Object.keys(packageJson.peerDependencies || {}),
        ]),
        plugins: [
            terser(),
            pluginJson(),
            commonjs({
                ignoreGlobal: true,
                include: /\/node_modules\//,
            }),
            nodeResolve({ extensions }),
            typescript({
                useTsconfigDeclarationDir: true,
                clean: true,
            }),
            babel({
                extensions,
                babelHelpers: 'runtime',
                plugins: [['@babel/plugin-transform-runtime', { version: babelRuntimeVersion, useESModules: true }]],
            }),
        ],
    },
];
