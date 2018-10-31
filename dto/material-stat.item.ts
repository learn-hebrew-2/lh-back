export default class MaterialStatItem {
  private _adds: number;
  private _views: number;
  private _finished: number;


  constructor() {
    this._adds = 0;
    this._views = 0;
    this._finished = 0;
  }

  public get adds(): number {
    return this._adds;
  }
  public set adds(value: number) {
    this._adds = value;
  }
  public get views(): number {
    return this._views;
  }
  public set views(value: number) {
    this._views = value;
  }
  public get finished(): number {
    return this._finished;
  }
  public set finished(value: number) {
    this._finished = value;
  }

  public get object() {
    return {
      adds: this._adds,
      views: this._views,
      finished: this._finished
    }
  }
}