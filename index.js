var fs = require('fs'),
    glob = require('glob'),
    loaderUtils = require('loader-utils')

module.exports = function() {}
module.exports.pitch = function(req) {
  var query = loaderUtils.parseQuery(this.query)
  !!query.cache && this.cacheable && this.cacheable()
  var file = query.path
  if (fs.existsSync(file)) {
	  return "module.exports = " + JSON.stringify(fs.readFileSync(file).toString('utf-8'))
  } else {
    var files = glob.glob.sync(file)
    var data = {}
    for (var i in files) {
      data[files[i]] = fs.readFileSync(files[i]).toString('utf-8')
    }
    return "module.exports = " + JSON.stringify(data)
  }
}
