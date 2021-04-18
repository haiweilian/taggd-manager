/**
 * @see utils.utilities.getOffset
 */
export interface IOffset {
    top: number;
    left: number;
}
/**
 * @see utils.utilities.setStyle
 */
export interface IStyleDeclaration {
    width?: number;
    height?: number;
    left?: number;
    top?: number;
    marginLeft?: number;
    marginTop?: number;
}
/**
 * @see utils.utilities.getPointer
 */
export interface IPointer {
    elX: number;
    elY: number;
    endX: number;
    endY: number;
    startX: number;
    startY: number;
}
/**
 * @see classes.*
 */
export interface IDefaultOptions {
    show: string;
    hide: string;
    addEvent: string;
    zoomRatio: number;
    zoomRatioMin: number;
    zoomRatioMax: number;
    hideDelay: number;
}
/**
 * @see classes.*
 */
export interface ImageData {
    width: number;
    height: number;
    naturalWidth: number;
    naturalHeight: number;
    naturalStyle: string;
    ratio: number;
    left: number;
    top: number;
}
/**
 * @see classes.*
 */
export interface IPosition {
    x: number;
    y: number;
    left: number;
    top: number;
}
