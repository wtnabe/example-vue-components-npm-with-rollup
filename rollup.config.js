const commonjs = require('rollup-plugin-commonjs')
const VuePlugin = require('rollup-plugin-vue')
const { terser } = require('rollup-plugin-terser')

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs.min.js',
      format: 'cjs'
    },
    {
      file: 'dist/awesome-vue-components.umd.min.js',
      format: 'umd',
      name: 'AwesomeVueComponents'
    },
    {
      file: 'dist/awesome-vue-components.esm.min.js',
      format: 'esm'
    }
  ],
  plugins: [
    commonjs(),
    VuePlugin(),
    terser()
  ]
}
