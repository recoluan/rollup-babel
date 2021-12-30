import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
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
    nodeResolve(), // 解析依赖的引用
    typescript(),
    babel({ 
      exclude: ['node_modules/**'], // 当不排除 node_modules 的时候需要排除 core-js
      // babelHelpers: 'runtime',
      presets: [
        [
          '@babel/preset-env', // 默认值直解析新语法，不解析新的原型上的方法
          // 如果这里指定 corejs，新的原型方法的垫片，将会全局污染
          {
            corejs: {
              version: 3,
              proposals: true
            },
            useBuiltIns: 'usage'
          }
        ]
      ],
      plugins: [
        // 开发依赖包建议使用 runtime 来指定 corejs, 这里可以防止全局污染
        // runtime的另外一个作用是减少引入重复
        // ["@babel/plugin-transform-runtime", {
        //   corejs: 3
        // }]
      ]
    }),
    commonjs(),
  ]
}