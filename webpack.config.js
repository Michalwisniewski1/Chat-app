module.exports = {
  entry: [
	'whatwg-fetch',
	'./js/app.jsx'
	],
  output: {
    filename: 'js/out.js'
},

devServer: {

	inline: true,
	contentBase: './',
	port: 3001

},

watch: true,

  module: {
    loaders: [
      {
        loader: 'babel-loader',

        // Exclude /node_modules directory
        exclude: /node_modules/,

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx/,

        // Options to configure babel with
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      },
    ]
  }
}
