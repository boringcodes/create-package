import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

const getConfig = (inputFile) => ({
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [nodeResolve(), typescript()],
  input: inputFile,
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
      exports: 'auto',
    },
  ],
});

export default [
  getConfig('src/index.ts'),
  // TODO: add another file here
];
