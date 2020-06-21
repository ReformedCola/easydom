window.dom = {
  create(tagNames) {
    const container = document.createElement('template')
    container.innerHTML = tagNames.trim()
    return container.content.firstChild
  },
  after(node, newNode) {
    node.parentNode.insertBefore(newNode, node.nextSibling)
  },
  before(node, newNode) {
    node.parentNode.insertBefore(newNode, node)
  },
  append(parent, node) {
    parent.appendChild(node)
  },
  wrap(node, parent) {
    dom.before(node, parent)
    dom.append(parent, node)
  },
  remove(node) {
    node.parentNode.removeChild(node)
    return node
  },
  empty(node) {

  },
}