const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: __dirname,
                exclude: /(node_modules|dist)/,
                use: 'babel-loader'
            }
        ]
    },
    externals: {
        react: 'commonjs react'
    }
};
