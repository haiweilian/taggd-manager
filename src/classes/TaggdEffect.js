import { assign, setStyle, getOffset, getPointer } from '../util/utilities'

export default {
  /**
   * load image and reset image
   * @param {Taggd.Tag[]} tags - An array of tags
   * @return {Taggd} Current Taggd instance
   */
  loadImage(tags) {
    this.emit('taggd.editor.load', this)

    const { image } = this
    const parent = image.parentNode
    const parentWidth = parent.offsetWidth || 500
    const parentHeight = parent.offsetHeight || 300
    const newImage = document.createElement('img')

    newImage.onload = () => {
      // Original aspect ratio
      const { naturalWidth, naturalHeight } = image
      const aspectRatio = naturalWidth / naturalHeight

      // Full center in default
      let width = parentWidth
      let height = parentHeight
      if (parentHeight * aspectRatio > parentWidth) {
        height = parentWidth / aspectRatio
      } else {
        width = parentHeight * aspectRatio
      }

      // Init image style
      const imageData = {
        width,
        height,
        naturalWidth,
        naturalHeight,
        ratio: width / naturalWidth,
        left: (parentWidth - width) / 2,
        top: (parentHeight - height) / 2,
      }
      const initialImageData = assign({}, imageData)

      this.imageData = imageData
      this.initialImageData = initialImageData

      // Init tags
      this.setTags(tags)
      this.imageChangeRender()

      this.emit('taggd.editor.loaded', this)
    }

    newImage.onerror = () => {}

    newImage.src = image.src

    return this
  },

  /**
   * change image reset style
   * @param {Object} style style change
   * @return {undefined}
   */
  imageChangeRender(style = {}) {
    style = { ...this.imageData, ...style }

    setStyle(this.image, {
      width: style.width,
      height: style.height,
      marginLeft: style.left,
      marginTop: style.top,
    })

    // update tags position
    this.tags.forEach((tag) => tag.setPosition())
  },

  /**
   * image click/dblclick hander
   * @param {EventTarget} event
   * @return {undefined}
   */
  imageClickHandler(event) {
    const { imageData } = this
    const offset = getOffset(this.image)

    const position = {
      x: ((event.pageX - offset.left) / imageData.width) * imageData.naturalWidth,
      y: ((event.pageY - offset.top) / imageData.height) * imageData.naturalHeight,
    }

    this.emit('taggd.editor.add', this, position)
  },

  /**
   * image wheel hander
   * @param {EventTarget} event
   * @return {undefined}
   */
  imageZoomHander(event) {
    if (this.wheeling) {
      return
    }

    this.wheeling = true

    setTimeout(() => {
      this.wheeling = false
    }, 50)

    event.preventDefault()

    const { options, imageData } = this
    const { width, height, naturalWidth, naturalHeight } = imageData

    let delta = 1
    let ratio = options.zoomRatio

    if (event.deltaY) {
      delta = event.deltaY > 0 ? 1 : -1
    } else if (event.wheelDelta) {
      delta = -event.wheelDelta / 120
    } else if (event.detail) {
      delta = event.detail > 0 ? 1 : -1
    }

    ratio *= -delta

    if (ratio < 0) {
      ratio = 1 / (1 - ratio)
    } else {
      ratio = 1 + ratio
    }

    ratio = (width * ratio) / naturalWidth

    const offset = getOffset(this.image)
    const newWidth = naturalWidth * ratio
    const newHeight = naturalHeight * ratio
    const offsetWidth = newWidth - width
    const offsetHeight = newHeight - height

    imageData.ratio = ratio
    imageData.width = newWidth
    imageData.height = newHeight
    imageData.left -= offsetWidth * ((event.pageX - offset.left) / width)
    imageData.top -= offsetHeight * ((event.pageY - offset.top) / height)

    this.imageChangeRender()

    this.emit('taggd.editor.zoom', this)
  },

  /**
   * image mousedown hander
   * @param {EventTarget} event
   */
  imageDownHander(event) {
    event.preventDefault()

    this.action = 'move'
    this.pointer = assign(getPointer(event), {
      moveX: this.imageData.left,
      moveY: this.imageData.top,
    })

    this.emit('taggd.editor.movedown', this)
  },

  /**
   * image mousemove hander
   * @param {EventTarget} event
   */
  imageMoveHander(event) {
    if (!this.action) {
      return
    }

    event.preventDefault()

    const { imageData, pointer } = this
    const { endX, endY } = getPointer(event, true)

    imageData.left = pointer.moveX + (endX - pointer.startX)
    imageData.top = pointer.moveY + (endY - pointer.startY)

    this.imageChangeRender()

    this.emit('taggd.editor.move', this)
  },

  /**
   * image mouseup hander
   * @param {EventTarget} event
   */
  imageUpHander(event) {
    event.preventDefault()

    this.action = false

    this.emit('taggd.editor.moveup', this)
  },
}
