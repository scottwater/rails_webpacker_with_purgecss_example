process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

const path = require('path')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')


// ensure classes with special chars like -mt-1 and md:w-1/3 are included
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g);
  }
}

environment.plugins.append('PurgecssPlugin', new PurgecssPlugin({
  paths: glob.sync([
    path.join(__dirname, '../../app/javascript/**/*.js'),
    path.join(__dirname, '../../app/views/**/*.erb')
  ]),
  extractors: [ // if using Tailwind
    {
      extractor: TailwindExtractor,
      extensions: ['html', 'js', 'erb']
    }
  ]
}));

module.exports = environment.toWebpackConfig()
