import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/reco.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/reco.umd.js',
      format: 'umd',
      name: 'Reco'
    },
    {
      file: 'dist/reco.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    // commonjs(),
    babel({ 
      exclude: ['node_modules/**'],
      babelHelpers: 'runtime',
      presets: [
        ['@babel/preset-env', {
          // "useBuiltIns": "usage",
          // "corejs": 3
        }]
      ],
      plugins: [
        ["@babel/plugin-transform-runtime", {
          corejs: 3
        }]
      ]
    }),
  ]
}