import { assign, getPointer, addClass, removeClass } from '../util/utilities'

export default {
  /**
   * tag mousedown hander
   * @param {EventTarget} event
   * @return {undefined}
   */
  tagDownHander(event) {
    event.preventDefault()

    addClass(this.buttonElement, 'taggd--grabbing')

    this.action = 'move'
    this.pointer = assign(getPointer(event), {
      moveX: this.position.left,
      moveY: this.position.top,
    })

    this.emit('taggd.tag.editor.movedown', this)
  },

  /**
   * tag mousemove hander
   * @param {EventTarget} event
   */
  tagMoveHander(event) {
    if (!this.action) {
      return
    }

    event.preventDefault()

    const { position, pointer, Taggd } = this
    const { left, top, ratio } = Taggd.imageData
    const { endX, endY } = getPointer(event, true)

    // update tag x & y
    position.x = (pointer.moveX + (endX - pointer.startX) - left) / ratio
    position.y = (pointer.moveY + (endY - pointer.startY) - top) / ratio

    this.setPosition()

    this.emit('taggd.tag.editor.move', this)
  },

  /**
   * tag mouseup hander
   * @param {EventTarget} event
   */
  tagUpHander(event) {
    if (!this.action) {
      return
    }

    event.preventDefault()

    removeClass(this.buttonElement, 'taggd--grabbing')

    this.action = false

    this.emit('taggd.tag.editor.moveup', this)
  },
}
