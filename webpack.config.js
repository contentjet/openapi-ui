'use strict';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


const extractText = new ExtractTextPlugin({
  filename: '[name].css',
  disable: process.env.npm_lifecycle_event !== 'build'
});


const postcssOptions = {
  // NOTE: The `ident` option might not be required in a future version of webpack:
  // https://github.com/postcss/postcss-loader/issues/92
  ident: 'postcss',
  plugins: function () {
    return [
      require('lost'),
      require('autoprefixer'),
      require('postcss-partial-import')({
        path: [
          path.join(__dirname, '/src/styles'),
          path.join(__dirname, 'node_modules')
        ]
      }),
      require('postcss-mixins'),
      require('postcss-advanced-variables'),
      require('postcss-custom-selectors'),
      require('postcss-custom-media'),
      require('postcss-custom-properties'),
      require('postcss-media-minmax'),
      require('postcss-color-function'),
      require('postcss-nesting'),
      require('postcss-nested'),
      require('postcss-atroot'),
      require('postcss-property-lookup'),
      require('postcss-extend'),
      require('postcss-selector-matches'),
      require('postcss-selector-not')
    ];
  }
};


var config = {
  entry: {
    main: ['babel-polyfill', './src/main.jsx']
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: false,
    port: 9000
  },
  cache: true,
  devtool: false,
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'actions': path.join(__dirname, '/src/actions/'),
      'constants': path.join(__dirname, '/src/constants/'),
      'data': path.join(__dirname, '/src/data/'),
      'filters': path.join(__dirname, '/src/filters/'),
      'img': path.join(__dirname, '/src/img/'),
      'lib': path.join(__dirname, '/src/lib/'),
      'reducers': path.join(__dirname, '/src/reducers/'),
      'screens': path.join(__dirname, '/src/screens/'),
      'selectors': path.join(__dirname, '/src/selectors/'),
      'settings': path.join(__dirname, '/src/settings/development.js'),
      'store': path.join(__dirname, '/src/store/')
    },
    plugins: [
      new DirectoryNamedWebpackPlugin({
        ignoreFn: function(webpackResolveRequest) {
          return !webpackResolveRequest.path.includes(path.join(__dirname, '/src/'));
        },
        transformFn: function(dirName) {
          return `${dirName}.jsx`;
        }
      })
    ]
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        include: [/node_modules/],
        use: extractText.extract({
          fallback: 'style-loader',
          use: [
            'css-loader'
          ]
        })
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: extractText.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: '[name]_[local]'
              }
            },
            {
              loader: 'postcss-loader',
              options: postcssOptions
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      },
      {
        test: /\.woff(2)?(\?.*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(ttf|eot|svg|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(html|txt|ico|yml)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    extractText,
    new HtmlWebpackPlugin({ 
      template: 'src/index.ejs'
    })
  ]
};

if (process.env.npm_lifecycle_event === 'build') {

  config.resolve.alias['settings'] = path.join(__dirname, '/src/settings/', process.env.SETTINGS_FILE || 'development.js');

  config.plugins = config.plugins.concat([
    new ExtractTextPlugin('[name].css'),
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]);

}

module.exports = config;
