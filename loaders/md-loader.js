const loaderUtils = require('loader-utils')
const MarkdownIt = require('markdown-it')
const yaml = require('js-yaml')

const metaRegex = /^\s*```ya?ml(.*?)```/s

module.exports = function(source) {
  this.cacheable()
  const params = loaderUtils.parseQuery(this.resourceQuery || '?')

  const md = new MarkdownIt()

  const metaMatch = source.match(metaRegex)
  let meta = {}
  if (metaMatch) {
    meta = yaml.load(metaMatch[1])
  }
  if (params.metaOnly === true) {
    const ret = { meta }
    return `export default ${JSON.stringify(ret)}`
  }

  const sourceWithoutMeta = source.replace(metaRegex, '').trim()
  let html = md.render(sourceWithoutMeta)
  html = html.replace(/<a /g, '<a rel="noopener noreferrer nofollow" ')
  const ret = {
    meta,
    html
  }
  return `export default ${JSON.stringify(ret)}`
}
