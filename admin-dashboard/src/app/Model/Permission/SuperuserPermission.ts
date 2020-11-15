import { PermissionBase } from "./PermissionBase";
import { PermissionType } from "./PermissionType";

export class SuperuserPermission extends PermissionBase {  constructor() {
    super();
    this.permissions = [
      PermissionType.PRODUCT, PermissionType.CATEGORY, 
      PermissionType.ARTICLE
    ];
  }
}