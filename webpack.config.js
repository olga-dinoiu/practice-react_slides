module.exports = {
    entry: __dirname + '/js/App.js',
    output: {
        path: __dirname + '/dist',
        filename: 'App.js'
    },
    module: {
        loaders: [
            {test: /\.hbs/, loader: 'handlebars'},
            {test: /\.scss/, loaders: ['style', 'css', 'sass']}
        ]
    }
};