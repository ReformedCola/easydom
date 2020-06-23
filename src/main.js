const newDiv = dom.create('<div>New Div</div>')
const oldDiv = dom.create('<div>Old Div</div>')
const childDiv = dom.create('<div><b>--Child Node</b></div>')
const parentDiv = dom.create('<div><i>-Parent Node</i></div>')

addBefore = () => {
  dom.before(test, oldDiv)
}

removeOldDiv = () => {
  dom.remove(oldDiv)
}

addAfter = () => {
  dom.after(test, newDiv)
}

removeNewDiv = () => {
  dom.remove(newDiv)
}

addChild = () => {
  dom.append(test, childDiv)
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

removeAll = () => {
  dom.empty(thanos)
}

dom.attr(test, 'title', 'Jason')
const title = dom.attr(test, 'title')
console.log(title)

changeText = () => {
  dom.text(text, 'Changed :D')
}

changeHtml = () => {
  dom.html(changeDiv, '<button>I am a button now</button>')
}

changeStyle = () => {
  dom.style(changeCSS, {background: 'orange', color: 'white'})
}

addClassList = () => {
  dom.class.add(addClass, 'red')
}

removeClassList = () => {
  dom.class.remove(addClass, 'red')
}

const fn = () => {
  console.log('Clicked')
}

dom.on(test, 'click', fn)
dom.off(test, 'click', fn)

const textDiv = dom.find('#textWrapper')[0]
console.log(textDiv)
console.log(dom.find('.blue', textDiv)[0])

console.log(dom.parent(test))
console.log(dom.children(test))
console.log(dom.siblings(text))
console.log(dom.next(text))
console.log(dom.previous(blueSibling))

changeBackground = () => {
  const thanosChildren = dom.find('#thanos')[0]
  dom.each(dom.children(thanosChildren), (n) => dom.style(n, 'background', 'red'))
}

const rank = dom.index(text)
console.log(rank)