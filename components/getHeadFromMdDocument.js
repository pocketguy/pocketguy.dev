const headFromMdDocument = (mdDocument) => {
  return {
    title: mdDocument.meta.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: mdDocument.meta.description
      }
    ]
  }
}

module.exports = {
  headFromMdDocument
}
