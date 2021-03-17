import { PermissionBase } from "./PermissionBase";
import { PermissionType } from "./PermissionType";

export class UnknownPermission extends PermissionBase {  constructor() {
    super();
    this.permissions = [
      PermissionType.LOGIN
    ];
  }
}