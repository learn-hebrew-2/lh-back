import ExcersiseItem from "./excersise.item";

export default class UserStatItem {
  private _date: Date;
  private _type: ExcersiseItem;
  private _score: number;

  constructor(date: Date, type: ExcersiseItem, score: number) {
    this._date = date;
    this._type = type;
    this._score = score;
  }

  public get object() {
    return {
      date: this._date,
      type: this._type,
      score: this._score
    }
  }

  public get date(): Date {
    return this._date;
  }

  public set date(value: Date) {
    this._date = value;
  }

  public get type(): ExcersiseItem {
    return this._type;
  }

  public set type(value: ExcersiseItem) {
    this._type = value;
  }

  public get score(): number {
    return this._score;
  }

  public set score(value: number) {
    this._score = value;
  }
}