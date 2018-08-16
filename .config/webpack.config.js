const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const LIBRARY_NAME = 'luogo';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: `${ LIBRARY_NAME }.min.js`
    },
    resolve: {
        modules: [
            path.resolve(__dirname, '../node_modules')
        ],
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            enforce: 'pre',
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.(s*)css$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                        sourceMap: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [autoprefixer()],
                        sourceMap: true
                    }
                },
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            test: /\.(s*)css$/,
            options: {
                sassLoader: {
                    includePaths: [path.resolve(__dirname, './src/scss')]
                }
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new MiniCssExtractPlugin({
            filename: `${ LIBRARY_NAME }.min.css`,
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HashedModuleIdsPlugin()
    ]
};
