import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const getConfig = (inputFile) => ({
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      rollupCommonJSResolveHack: true,
    }),
  ],
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
