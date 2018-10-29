import PermissionItem from './permission.item';
import DictionaryUnitItem from './dictionary-unit.item';

export default class UserTypeItem extends DictionaryUnitItem {
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