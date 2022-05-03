const webpack =  require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

//const webpack = require('webpack');

const CONSTANTS = require('./../CONSTANTS');

const PAGES = CONSTANTS.PAGES;

const PAGE_UNDER_DEVELOPMENT = PAGES.RESET_PASSWORD;  // здесь указывать страницу, которая в данный момент разрабатывается
                                                    // список всех страниц находится в CONSTANTS.js
                            // PAGES.HOME
                            // PAGES.DICTIONARIES
                            // PAGES.TRAINING
                            // PAGES.REGISTRATION
                            // PAGES.AUTHORIZATION
                            // PAGES.RESET_PASSWORD
                            // PAGES.INFORMATION_MASSAGE

const devWebpackConfig = merge( baseWebpackConfig, {

    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: baseWebpackConfig.externals.paths.dist,
        port: 8081,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin( 
            {
                filename: '[file].map'
            } 
        ),
        new webpack.DefinePlugin({
            'IS_DEVELOPMENT': JSON.stringify( true ),
            'IS_PRODUCTION': JSON.stringify( false ),
            'ACTIVE_PAGE': JSON.stringify(PAGE_UNDER_DEVELOPMENT),
        }),
    ]
} );

module.exports = new Promise( ( resolve, reject ) => {
    resolve( devWebpackConfig )
} );