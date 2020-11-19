import { resolve } from 'path';

const config = {
  entry: {
    's3-uploader/index': resolve(__dirname, './src/handlers/s3-uploader.ts'),
    's3-retriever/index': resolve(__dirname, './src/handlers/s3-retriever.ts'),
  },
  output: {
    path: resolve(__dirname, './build'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.scss'],
  },
  target: 'node',
  externals: {
    'aws-sdk': 'aws-sdk',
  },
  mode: process.env.NODE_ENV === 'dev' ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ],
  },
};

export default config;
