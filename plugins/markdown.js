const MarkdownIt = require('markdown-it')
const yaml = require('js-yaml')
const md = new MarkdownIt()

export default ({ app }, inject) => {
  inject('md', (text) => {
    let html = md.render(text)
    let doc = null
    if (process.server) {
      const jsdom = require('jsdom')
      const { JSDOM } = jsdom
      const dom = new JSDOM()
      doc = dom.window.document
    } else {
      doc = document
    }
    const div = doc.createElement('div')
    div.innerHTML = html
    let meta = {}
    if (div.children[0].tagName === 'PRE') {
      meta = yaml.load(div.children[0].textContent)
      div.children[0].remove()
      html = div.innerHTML
    }
    return {
      html,
      meta
    }
  })
}
