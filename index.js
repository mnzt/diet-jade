const fs = require('fs');
const jade = require('jade')

/*
 * Usage:
 * var jade = require('diet-jade')({ path: app.path+'/static/jade' })
 *
 * app.header(jade)
 *
 * $.render('index') => $.render('index.jade')
 *
 */

module.exports = function(options) {
  var options = options || {}

  return function($) {
    $.render = function(filename) {
      $.header('Content-Type', 'text/html; charset=UTF-8')
      console.log(filename);
      filename ? (filename.indexOf('.jade')>-1 ? (options.file = filename) : (options.file = filename + '.jade')) : ($.error('No jade file specified'))
      var path = (options.path.slice(-1) === '/') ? options.path : options.path + '/'
      var fn = jade.compileFile(path + options.file, {
        pretty: true,
      })
      var html = fn($.data)
      // console.log(html);
      $.end(html)
    }
    $.return()
  }
}
