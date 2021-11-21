const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/html/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs/js')
    },
    target: "web"
}