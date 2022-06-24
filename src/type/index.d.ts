export declare type Noop = () => void
export declare type Mouse = MouseEvent | TouchEvent
export interface Size {
  w: number
  h: number
}
export interface CanvasEngineProps {
  el: HTMLCanvasElement
  width?: number
  height?: number
  imgSrc?: string
  onSuccess?: Noop
  onFail?: Noop
  onRefresh?: Noop
}
