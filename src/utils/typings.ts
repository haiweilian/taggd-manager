import type Tag from '../core/Tag'
import type Taggd from '../core/Taggd'

/**
 * IOptions
 */
export interface IOptions {
  show: string
  hide: string
  addEvent: string
  zoomRatio: number
  zoomRatioMin: number
  zoomRatioMax: number
  hideDelay: number
}

/**
 * IOffset
 */
export interface IOffset {
  top: number
  left: number
}

/**
 * IPointer
 */
export interface IPointer {
  elX: number
  elY: number
  endX: number
  endY: number
  startX: number
  startY: number
}

/**
 * IStyleDeclaration
 */
export interface IStyleDeclaration {
  width?: number
  height?: number
  left?: number
  top?: number
  marginLeft?: number
  marginTop?: number
}

/**
 * IPosition
 */
export interface IPosition {
  x: number
  y: number
  left: number
  top: number
}

/**
 * IImageData
 */
export interface IImageData {
  width: number
  height: number
  naturalWidth: number
  naturalHeight: number
  naturalStyle: string
  ratio: number
  left: number
  top: number
}

/**
 * Tag Events
 */
export interface ITagEvent {
  'taggd.tag.show': (tag: Tag) => any
  'taggd.tag.shown': (tag: Tag) => any
  'taggd.tag.hide': (tag: Tag) => any
  'taggd.tag.hidden': (tag: Tag) => any
  'taggd.tag.change': (tag: Tag) => any
  'taggd.tag.changed': (tag: Tag) => any
  'taggd.tag.click': (tag: Tag) => any
  'taggd.tag.editor.enable': (tag: Tag) => any
  'taggd.tag.editor.disable': (tag: Tag) => any
  'taggd.tag.editor.movedown': (tag: Tag) => any
  'taggd.tag.editor.move': (tag: Tag) => any
  'taggd.tag.editor.moveup': (tag: Tag) => any
}

/**
 * Taggd Events
 */
export interface ITaggdEvent {
  'taggd.destroy': (taggd: Taggd) => any
  'taggd.editor.enable': (taggd: Taggd) => any
  'taggd.editor.disable': (taggd: Taggd) => any
  'taggd.editor.load': (taggd: Taggd) => any
  'taggd.editor.loaded': (taggd: Taggd) => any
  'taggd.editor.loaderror': (taggd: Taggd) => any
  'taggd.editor.add': (taggd: Taggd, position: Pick<IPosition, 'x' | 'y'>) => any
  'taggd.editor.zoom': (taggd: Taggd) => any
  'taggd.editor.movedown': (taggd: Taggd) => any
  'taggd.editor.move': (taggd: Taggd) => any
  'taggd.editor.moveup': (taggd: Taggd) => any
  'taggd.tag.add': (taggd: Taggd, tag: Tag) => any
  'taggd.tag.added': (taggd: Taggd, tag: Tag) => any
  'taggd.tag.delete': (taggd: Taggd, tag: Tag) => any
  'taggd.tag.deleted': (taggd: Taggd, tag: Tag) => any
  'taggd.tag.show': (taggd: Taggd, tag: Tag) => any
  'taggd.tag.shown': (taggd: Taggd, tag: Tag) => any
  'taggd.tag.hide': (taggd: Taggd, tag: Tag) => any
  'taggd.tag.hidden': (taggd: Taggd, tag: Tag) => any
  'taggd.tag.change': (taggd: Taggd, tag: Tag) => any
  'taggd.tag.changed': (taggd: Taggd, tag: Tag) => any
  'taggd.tag.click': (taggd: Taggd, tag: Tag) => any
  'taggd.tag.editor.enable': (taggd: Taggd, tag: Tag) => any
  'taggd.tag.editor.disable': (taggd: Taggd, tag: Tag) => any
  'taggd.tag.editor.movedown': (taggd: Taggd, tag: Tag) => any
  'taggd.tag.editor.move': (taggd: Taggd, tag: Tag) => any
  'taggd.tag.editor.moveup': (taggd: Taggd, tag: Tag) => any
}
