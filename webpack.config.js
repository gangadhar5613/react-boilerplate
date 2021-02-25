const { resolve } = require('path')
const path = require('path')


module.exports = {
    mode:'development',
    entry:'./index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/i,
            exclude:'/node_modules',
            use: {
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                },
            }
          },
          {test:/\.scss$/,use:'raw-loader'}
        ],
      },
}