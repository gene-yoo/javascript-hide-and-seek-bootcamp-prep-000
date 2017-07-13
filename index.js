
function getFirstSelector(selector) {
  var elementMatch = document.querySelector(selector)
  return elementMatch
}

function nestedTarget() {
  var elementMatch = document.querySelector('#nested .target')
  return elementMatch
}

function increaseRankBy(n) {
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}

function deepestChild() {
  var query = document.querySelectorAll('div#grand-node')
  var x = query[0]
  var y = x.querySelector('div')

  while (y.children.length > 0) {
    x = y
    y = x.querySelector('div')
  }

  return y
}
