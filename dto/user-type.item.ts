import PermissionItem from './permission.item';
import AuthenticationInterface from '../interfaces/authentication.interface';
import { OperationStatus } from '../enums/operation-status.enum';

export default class UserTypeItem implements AuthenticationInterface{
  private _permissions: PermissionItem[];

  constructor(permissions?: PermissionItem[]) {
    this._permissions = permissions;
  }

  getPermission(): PermissionItem {
    return null;
  };
  checkPermission(): boolean {
    return null;
  };
  setPermissions(permissions: PermissionItem[]): OperationStatus {
    return null;
  };

  get permissions() {
    return this._permissions;
  }

  set permissions(permissions: PermissionItem[]) {
    this._permissions = permissions;
  }
}