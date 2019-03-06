import nodeResolve  from 'rollup-plugin-node-resolve'
import commonjs     from 'rollup-plugin-commonjs'
import babel        from 'rollup-plugin-babel'

export default {
  input: 'src/vue-web-monetization.js',
  output: [
    {
      file: './dist/vue-web-monetization.cjs',
      format: 'cjs',
    },
    {
      file: './dist/vue-web-monetization.js',
      format: 'es',
    }
  ],
  plugins: [
    nodeResolve({ jsnext: true }), // npmモジュールを`node_modules`から読み込む
    commonjs(), // CommonJSモジュールをES6に変換
    babel() // ES5に変換
  ]
}