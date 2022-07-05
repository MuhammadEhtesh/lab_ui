const path = require('path')
const del = require('del')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const RtlCssPlugin = require('rtlcss-webpack-plugin')

const rootPath = path.resolve(__dirname)
const distPath = rootPath + '/src/_metronic/assets'

const entries = {
  'css/style': './src/_metronic/assets/sass/style.scss',
}

(async () => {
  await del.sync(distPath + '/css', {force: true})
})()

function mainConfig() {
  return {
    mode: 'development',
    stats: 'errors-only',
    performance: {
      hints: false,
    },
    entry: entries,
    output: {
      // main output path in assets folder
      path: distPath,
      // output path based on the entries' filename
      filename: '[name].js',
    },
    resolve: {
      extensions: ['.scss'],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new RtlCssPlugin({
        filename: '[name].rtl.css',
      }),
      {
        apply: (compiler) => {
          // hook name
          compiler.hooks.afterEmit.tap('AfterEmitPlugin', () => {
            ;(async () => {
              await del.sync(distPath + '/css/*.js', {force: true})
            })()
          })
        },
      },
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
  }
}

module.exports = function () {
  return [mainConfig()]
}
