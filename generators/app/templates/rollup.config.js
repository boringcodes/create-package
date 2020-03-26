import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const getConfig = (inputFile) => ({
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [resolve(), typescript({ useTsconfigDeclarationDir: true })],
  input: inputFile,
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
    },
  ],
});

export default [
  getConfig('src/index.ts'),
  // TODO: add another file here
];
