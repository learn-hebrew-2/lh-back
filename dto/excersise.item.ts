export default class ExcersiseItem {
  private _id: string;
  private _name: string;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
  }

  public get id(): string {
    return this._id;
  }

  public get name_1(): string {
    return this._name;
  }
  public set name_1(value: string) {
    this._name = value;
  }
}