const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
    filename: 'bundle.css'
});

module.exports = env => {
    //entry
    let entry, output;
    if (env && env.NODE_ENV !== 'undefined' && env.NODE_ENV === 'module') {
        entry = ['./public/js/module.js'];
        output = {
            path: path.join(__dirname, 'dist'),
            filename: 'module.min.js'
        };
    } else {
        entry = ['babel-polyfill', './public/js/vendor.js', './public/js/main.js'];
        out = {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js'
        };
    }

    return {
        entry: entry,
        output: output,
        plugins: [
            new UglifyJsPlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new HtmlWebpackPlugin({
                title: 'My App',
                template: 'public/index.html',
                inject: 'head',
                minify: true
            }),
            extractPlugin
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    use: extractPlugin.extract({
                        use: [
                            'css-loader',
                            'sass-loader'
                        ]
                    })
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }]
                }
            ]
        },
        node: {
            fs: 'empty'
        }
    }
}