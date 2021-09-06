import Tag from './Tag'
import Taggd from './Taggd'
import { setStyle, getOffset, getPointer, getWheelRatio, addClass, removeClass } from '../utils/utilities'

const TaggdEffect: ThisType<Taggd> = {
  /**
   * Load image and reset image
   * @param {Taggd.Tag[]} tags - An array of tags
   * @return {Taggd} Current Taggd instance
   */
  loadImage(tags: Tag[]) {
    this.emit('taggd.editor.load', this)

    const { image, wrapper, imageData } = this
    const parentWidth = wrapper.offsetWidth
    const parentHeight = wrapper.offsetHeight
    const newImage = document.createElement('img')

    addClass(wrapper, 'taggd--loading')

    newImage.onload = () => {
      removeClass(wrapper, 'taggd--loading')

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
      imageData.width = width
      imageData.height = height
      imageData.naturalWidth = naturalWidth
      imageData.naturalHeight = naturalHeight
      imageData.naturalStyle = image.style.cssText
      imageData.ratio = width / naturalWidth
      imageData.left = (parentWidth - width) / 2
      imageData.top = (parentHeight - height) / 2

      // Init tags
      this.setTags(tags)
      this.taggdChangeRender()

      this.emit('taggd.editor.loaded', this)
    }

    newImage.onerror = () => {
      this.emit('taggd.editor.loaderror', this)
    }

    newImage.src = image.src

    return this
  },

  /**
   * Change image reset style
   * @return {Taggd} Current Taggd instance
   */
  taggdChangeRender() {
    const { image, imageData } = this

    setStyle(image, {
      width: imageData.width,
      height: imageData.height,
      marginLeft: imageData.left,
      marginTop: imageData.top,
    })

    // update tags position
    this.tags.forEach((tag) => tag.setPosition())

    return this
  },

  /**
   * Taggd click/dblclick hander
   * @param {MouseEvent} event
   * @return {Taggd} Current Taggd instance
   */
  taggdClickHandler(event: MouseEvent) {
    const { imageData } = this
    const offset = getOffset(this.image)

    const position = {
      x: (event.pageX - offset.left) / imageData.ratio,
      y: (event.pageY - offset.top) / imageData.ratio,
    }

    this.emit('taggd.editor.add', this, position)

    return this
  },

  /**
   * Taggd wheel hander
   * @param {WheelEvent} event
   * @return {Taggd} Current Taggd instance
   */
  taggdZoomHander(event: WheelEvent) {
    event.preventDefault()

    if (this.wheeling) {
      return
    }

    this.wheeling = true

    setTimeout(() => {
      this.wheeling = false
    }, 50)

    const { options, image, imageData } = this
    const { width, height, naturalWidth, naturalHeight } = imageData

    let ratio = getWheelRatio(event, options.zoomRatio)

    const zoomRatioMin = Math.max(0.01, options.zoomRatioMin)
    const zoomRatioMax = Math.min(100, options.zoomRatioMax)

    ratio = (width * ratio) / naturalWidth
    ratio = Math.min(Math.max(ratio, zoomRatioMin), zoomRatioMax)

    const offset = getOffset(image)
    const newWidth = naturalWidth * ratio
    const newHeight = naturalHeight * ratio
    const offsetWidth = newWidth - width
    const offsetHeight = newHeight - height

    imageData.ratio = ratio
    imageData.width = newWidth
    imageData.height = newHeight
    imageData.left -= offsetWidth * ((event.pageX - offset.left) / width)
    imageData.top -= offsetHeight * ((event.pageY - offset.top) / height)

    this.taggdChangeRender()

    this.emit('taggd.editor.zoom', this)

    return this
  },

  /**
   * Taggd mousedown hander
   * @param {MouseEvent} event
   * @return {Taggd} Current Taggd instance
   */
  taggdDownHander(event: MouseEvent) {
    event.preventDefault()

    addClass(this.wrapper, 'taggd--grabbing')

    this.action = 'move'
    this.pointer = {
      ...getPointer(event),
      elX: this.imageData.left,
      elY: this.imageData.top,
    }

    this.emit('taggd.editor.movedown', this)

    return this
  },

  /**
   * Taggd mousemove hander
   * @param {MouseEvent} event
   * @return {Taggd} Current Taggd instance
   */
  taggdMoveHander(event: MouseEvent) {
    if (!this.action) {
      return
    }

    event.preventDefault()

    const { imageData, pointer } = this
    const { endX, endY } = getPointer(event)

    imageData.left = pointer.elX + (endX - pointer.startX)
    imageData.top = pointer.elY + (endY - pointer.startY)

    this.taggdChangeRender()

    this.emit('taggd.editor.move', this)

    return this
  },

  /**
   * Taggd mouseup hander
   * @param {MouseEvent} event
   * @return {Taggd} Current Taggd instance
   */
  taggdUpHander(event: MouseEvent) {
    if (!this.action) {
      return
    }

    event.preventDefault()

    // If it is not visible, restore to the last starting position.
    const { imageData, wrapper, pointer } = this
    const l = Math.abs(imageData.left) >= (imageData.left >= 0 ? wrapper.offsetWidth : imageData.width)
    const t = Math.abs(imageData.top) >= (imageData.top >= 0 ? wrapper.offsetHeight : imageData.height)

    if (l || t) {
      imageData.left = pointer.elX
      imageData.top = pointer.elY
      this.taggdChangeRender()
    }

    removeClass(this.wrapper, 'taggd--grabbing')

    this.action = ''
    this.emit('taggd.editor.moveup', this)

    return this
  },
}

export default TaggdEffect
