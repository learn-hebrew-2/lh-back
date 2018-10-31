export default abstract class DictionaryUnitItem {
  private _progress: number;
  private _lastDateStudy: Date;

  constructor(progress: number, lastDateStudy: Date) {
    this._progress = progress;
    this._lastDateStudy = lastDateStudy;
  }

  get progress(): number {
    return this._progress;
  }

  set progress(progress) {
    this._progress = progress;
  }

  get lastDateStudy(): Date {
    return this._lastDateStudy;
  }

  set lastDateStudy(lastDateStudy) {
    this._lastDateStudy = lastDateStudy;
  }
}