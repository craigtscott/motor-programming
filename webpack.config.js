module.exports = {
  entry: "./lib/mockina.jsx",
  output: {
  	filename: "./lib/bundle.js"
  },
  module: {
     loaders: [
       {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',
         query: {
           presets: ['react', 'es2015']
         }
       }
     ]
   },
   resolve: {
     extensions: ["", ".js", ".jsx" ]
   },
   devtool: 'source-map'
};
