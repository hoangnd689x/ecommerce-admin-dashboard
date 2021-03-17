import { PermissionBase } from "./PermissionBase";
import { PermissionType } from "./PermissionType";

export class AdminPermission extends PermissionBase {  constructor() {
    super();
    this.permissions = [
      PermissionType.PRODUCT, PermissionType.CATEGORY, 
      PermissionType.ARTICLE, PermissionType.DASHBOARD,
      PermissionType.LOGOUT, PermissionType.ACCOUNT
    ];
  }
}