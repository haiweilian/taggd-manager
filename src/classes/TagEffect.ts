import { getPointer, addClass, removeClass } from '../utils/utilities'
import Tag from './Tag'

const TagEffect: ThisType<Tag> = {
  /**
   * tag mousedown hander
   * @param {MouseEvent} event
   * @return {Taggd.Tag} Current Taggd.Tag instance
   */
  tagDownHander(event: MouseEvent) {
    event.preventDefault()

    addClass(this.buttonElement, 'taggd--grabbing')

    this.move = false
    this.action = 'move'
    this.pointer = {
      ...getPointer(event),
      elX: this.position.left,
      elY: this.position.top,
    }

    this.emit('taggd.tag.editor.movedown', this)

    return this
  },

  /**
   * tag mousemove hander
   * @param {MouseEvent} event
   * @return {Taggd.Tag} Current Taggd.Tag instance
   */
  tagMoveHander(event: MouseEvent) {
    if (!this.action) {
      return
    }

    event.preventDefault()

    const { position, pointer, Taggd } = this
    const { left, top, ratio, naturalWidth, naturalHeight } = Taggd.imageData
    const { endX, endY } = getPointer(event)

    // update tag x & y
    const x = (pointer.elX + (endX - pointer.startX) - left) / ratio
    const y = (pointer.elY + (endY - pointer.startY) - top) / ratio

    position.x = Math.min(Math.max(0, x), naturalWidth)
    position.y = Math.min(Math.max(0, y), naturalHeight)

    this.move = true
    this.setPosition()
    this.emit('taggd.tag.editor.move', this)

    return this
  },

  /**
   * tag mouseup hander
   * @param {MouseEvent} event
   * @return {Taggd.Tag} Current Taggd.Tag instance
   */
  tagUpHander(event: MouseEvent) {
    if (!this.action) {
      return
    }

    event.preventDefault()

    removeClass(this.buttonElement, 'taggd--grabbing')

    this.action = ''
    this.move && this.emit('taggd.tag.editor.moveup', this)

    return this
  },
}

export default TagEffect
