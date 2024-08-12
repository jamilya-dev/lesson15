'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector
  this.height = height
  this.width = width
  this.bg = bg
  this.fontSize = fontSize
  this.createElement = function (selector) {
    let elem = '';
    if (selector.startsWith('.')) {
      elem = document.createElement('div')
      elem.classList.add(selector.substring(1))
    } else if (selector.startsWith('#')) {
      elem = document.createElement('p')
      elem.setAttribute('id', selector.substring(1))
    }
    elem.style.cssText = 'height:' + height + 'px; width:' + width + 'px; background-color:' + bg + '; font-size:' + fontSize + 'px;'
    elem.textContent = 'Text'
    document.querySelector('.container').append(elem)
  }
}

const createBlock = new DomElement('.block', 100, 100, 'red', 16)
createBlock.createElement(createBlock.selector)


