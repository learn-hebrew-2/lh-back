import PermissionItem from './permission.item';

export default class UserTypeItem {
  private _permissions: PermissionItem[];

  constructor(permissions?: PermissionItem[]) {
    this._permissions = permissions;
  }

  get permissions() {
    return this._permissions;
  }

  set permissions(permissions: PermissionItem[]) {
    this._permissions = permissions;
  }
}