import path from 'path';
import SveltePreprocess from 'svelte-preprocess';
import { Configuration } from 'webpack';

const config : Configuration = {
    mode: 'production',
    entry: {
      index: ['./src/main.ts'],
    },
    resolve: {
      alias: {
        svelte: path.resolve('node_modules', 'svelte')
      },
      extensions: ['.mjs', '.js', '.ts', '.svelte'],
      mainFields: ['svelte', 'browser', 'module', 'main'],
    },
    output: {
      path: path.resolve(process.cwd(), 'dist'),
      filename: '[name].mjs',
      chunkFilename: '[name].[id].js',
    },
    module: {
      rules: [
        {
          test: /\.svelte$/,
          use: {
            loader: require.resolve('svelte-loader'),
            options: {
              preprocess: SveltePreprocess()
            }
          },
        },
        {
          test: /\.ts$/,
          loader: require.resolve('ts-loader'),
          exclude: /node_modules/,
        },
        {
          // required to prevent errors from Svelte on Webpack 5+
          test: /node_modules\/svelte\/.*\.mjs$/,
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    }
  };


export default config;