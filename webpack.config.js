var path = require('path');

module.exports = {
    entry: './public/js/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/build')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
