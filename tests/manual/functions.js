/* eslint-disable no-undef, no-plusplus, no-unused-vars */
/**
 * Adds an image to the document
 * @param {Function} done - The callback to call after image has loaded
 */
function createImage(done) {
  const image = document.createElement('img')
  image.onload = done
  image.src = '/base/tests/assets/512x256.jpg'

  document.body.appendChild(image)
}

/**
 * Clears the body
 */
function destroyBody() {
  const element = document.body

  while (element.hasChildNodes()) {
    element.removeChild(document.body.lastChild)
  }
}

/**
 * Gets the image element
 * @return {DomNode} - The image element
 */
function getImageElement() {
  const images = document.getElementsByTagName('img')
  return images[0]
}

/**
 * Trigger an event on element
 * @param {DomNode} element - The element to trigger the event on
 * @param {String} eventName - The event name
 */
function triggerEvent(element, eventName) {
  element.dispatchEvent(
    new Event(eventName, {
      bubbles: true,
      cancelable: true,
      view: window,
    })
  )
}

/**
 * Create a random tag
 * @return {TaggdManager.Tag} - The tag
 */
function createTag() {
  const characterSet = 'abcdefghijklmnopqrstuvwxyz'
  let textLength = 0xf
  let text = ''

  do {
    text += characterSet[Math.floor(Math.random() * characterSet.length)]
  } while (--textLength)

  return new Taggd.Tag(
    {
      x: Math.round(Math.random() * (0 - 1000) + 1000),
      y: Math.round(Math.random() * (0 - 500) + 500),
    },
    text
  )
}
