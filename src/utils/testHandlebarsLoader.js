const Handlebars = require('handlebars')

function transformHbsToHtml(src) {
  try {
    const template = Handlebars.compile(src)
    const html = template()
    const content = JSON.stringify(html)
    return `module.exports = ${content};`
  } catch (e) {
    throw e
  }
}

module.exports = {
  process(src, filePath) {
    return transformHbsToHtml(src, filePath)
  }
}
