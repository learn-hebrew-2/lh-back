import PermissionItem from "../dto/permission.item";
import { OperationStatus } from "../enums/operation-status.enum";

export default interface AuthenticationInterface {
  getPermission(): PermissionItem;
  checkPermission(): boolean;
  setPermissions(permissions: PermissionItem[]): OperationStatus;
}