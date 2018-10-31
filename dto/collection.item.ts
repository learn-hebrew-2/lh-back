export default class CollectionItem {
  private _id: string;
  private _name: string;
  
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get object() {
    return {
      id: this._id,
      name: this._name
    }
  }
}