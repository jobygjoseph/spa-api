const webpack = require('webpack');
const path = require('path');

module.exports = {
    resolve: {
      modules: [
        __dirname + './src',
        'node_modules'
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      })
    ],
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        path: path.join(__dirname, '/dist/assets'),
        filename: "bundle.js",
        publicPath: "assets"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader?presets[]=latest,presets[]=stage-0,presets[]=react,plugins[]=transform-decorators-legacy']
            },
            {
              test: /\.css$/,
              exclude: /(node_modules)/,
              loader: ['css-loader']
            }
        ],
    }
}