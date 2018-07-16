var path = require('path');

module.exports = {
    entry: './public/js/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
