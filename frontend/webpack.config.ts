//next.configがあるからいらなそう？
import * as path from 'path';
import * as webpack from '';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const config: webpack.Configuration = {
  moduleaa: {
    rules: [
      // {				exclude: /(node_modules | bower_components)/,      },
      // { test: /\.css$/, use: 'css-loader' },
      // // { test: /\.ts|tsx|jsx|js$/, use: 'ts-loader' },
      // { test: /\.tsx|ts?$/, loader: '@graphql-tools/webpack-loader' },
      { test: /\.css$/, use: 'css-loader' },
          { test: /\.ts$/, use: 'ts-loader' },
    //  { loader: '@graphql-tools/webpack-loader',}


    ],
  },
  mode: 'production',
  entry: './foo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js',
  },
};

export default config;