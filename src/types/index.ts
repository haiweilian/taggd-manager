/**
 * Tag Events
 */
export enum EventTag {
  'taggd.tag.delete' = 'taggd.tag.delete',
  'taggd.tag.deleted' = 'taggd.tag.deleted',
  'taggd.tag.show' = 'taggd.tag.show',
  'taggd.tag.shown' = 'taggd.tag.shown',
  'taggd.tag.hide' = 'taggd.tag.hide',
  'taggd.tag.hidden' = 'taggd.tag.hidden',
  'taggd.tag.change' = 'taggd.tag.change',
  'taggd.tag.changed' = 'taggd.tag.changed',
  'taggd.tag.editor.enable' = 'taggd.tag.editor.enable',
  'taggd.tag.editor.disable' = 'taggd.tag.editor.disable',
  'taggd.tag.editor.movedown' = 'taggd.tag.editor.movedown',
  'taggd.tag.editor.move' = 'taggd.tag.editor.move',
  'taggd.tag.editor.moveup' = 'taggd.tag.editor.moveup',
}

export type IEventTag = keyof typeof EventTag

/**
 * Taggd Events
 */
export enum EventTaggd {
  'taggd.destroy' = 'taggd.destroy',
  'taggd.editor.enable' = 'taggd.editor.enable',
  'taggd.editor.disable' = 'taggd.editor.disable',
  'taggd.editor.load' = 'taggd.editor.load',
  'taggd.editor.loaded' = 'taggd.editor.loaded',
  'taggd.editor.loaderror' = 'taggd.editor.loaderror',
  'taggd.editor.add' = 'taggd.editor.add',
  'taggd.editor.zoom' = 'taggd.editor.zoom',
  'taggd.editor.movedown' = 'taggd.editor.movedown',
  'taggd.editor.move' = 'taggd.editor.move',
  'taggd.editor.moveup' = 'taggd.editor.moveup',
  'taggd.tag.add' = 'taggd.tag.add',
  'taggd.tag.added' = 'taggd.tag.added',
  'taggd.tag.delete' = 'taggd.tag.delete',
  'taggd.tag.deleted' = 'taggd.tag.deleted',
  'taggd.tag.show' = 'taggd.tag.show',
  'taggd.tag.shown' = 'taggd.tag.shown',
  'taggd.tag.hide' = 'taggd.tag.hide',
  'taggd.tag.hidden' = 'taggd.tag.hidden',
  'taggd.tag.change' = 'taggd.tag.change',
  'taggd.tag.changed' = 'taggd.tag.changed',
  'taggd.tag.editor.enable' = 'taggd.tag.editor.enable',
  'taggd.tag.editor.disable' = 'taggd.tag.editor.disable',
  'taggd.tag.editor.movedown' = 'taggd.tag.editor.movedown',
  'taggd.tag.editor.move' = 'taggd.tag.editor.move',
  'taggd.tag.editor.moveup' = 'taggd.tag.editor.moveup',
}

export type IEventTaggd = keyof typeof EventTaggd

/**
 * IOffset
 */
export interface IOffset {
  top: number
  left: number
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
 * IDefaultOptions
 */
export interface IDefaultOptions {
  show: string
  hide: string
  addEvent: string
  zoomRatio: number
  zoomRatioMin: number
  zoomRatioMax: number
  hideDelay: number
}

/**
 * ImageData
 */
export interface ImageData {
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
 * IPosition
 */
export interface IPosition {
  x: number
  y: number
  left: number
  top: number
}
