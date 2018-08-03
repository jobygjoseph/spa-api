module.exports = {
    resolve: {
      modules: [
        __dirname + './src',
        'node_modules'
      ]
    },
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: __dirname + '/dist',
        port: process.env.PORT || 3000
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