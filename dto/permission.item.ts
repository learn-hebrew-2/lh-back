export default class PermissionItem {
  private _id: string;
  private _method: string;

  constructor(id: string, method: string) {
    this._id = id;
    this._method = method;
  }

  public id() {
    return this._id;
  }

  public method() {
    return this._method;
  }
}