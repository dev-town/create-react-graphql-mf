import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from '@rollup/plugin-terser';
import pluginJson from '@rollup/plugin-json';

let override = { compileOptions: { declaaration: false } };
const extensions = ['.ts', '.tsx'];

export default [
    // CommonJS
    {
        input: 'src/config.ts',
        output: { file: 'lib/index.js', format: 'cjs' },
        plugins: [
            commonjs({
                include: /\/node_modules\//
            }),
            nodeResolve({ extensions }),
            typescript({
                tsconfigOverride: override,
            }),
            terser(),
            pluginJson(),
        ],
    },
];
