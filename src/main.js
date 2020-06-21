const newDiv = dom.create("<div>New Div</div>")
const oldDiv = dom.create("<div>Old Div</div>")
const childDiv = dom.create("<div><b>--Child Node</b></div>")
const parentDiv = dom.create("<div><i>-Parent Node</i></div>")

addBefore = () => {
  dom.before(window.test, oldDiv)
}

removeOldDiv = () => {
  dom.remove(oldDiv)
}

addAfter = () => {
  dom.after(window.test, newDiv)
}

removeNewDiv = () => {
  dom.remove(newDiv)
}

addChild = () => {
  dom.append(window.test, childDiv)
}

addParent = () => {
  dom.wrap(childDiv, parentDiv)
}

removeParent = () => {
  dom.remove(parentDiv)
}

remove = () => {
  dom.remove(childDiv)
}