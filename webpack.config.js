module.exports = {
  mode: 'production',
  entry: './index.src.js',
  output: { filename: 'index.js', path: __dirname },
  optimization: { minimize: false },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: { loader: "babel-loader", options: { plugins: ['babel-plugin-jsfr'] } } }
    ]
  }
}
