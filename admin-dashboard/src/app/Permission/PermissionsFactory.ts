import { AdminPermission } from "../Model/Permission/AdminPermission";
import { PermissionBase } from "../Model/Permission/PermissionBase";
import { Role } from "../Model/Permission/Role";
import { SuperuserPermission } from "../Model/Permission/SuperuserPermission";
import { UnknownPermission } from "../Model/Permission/UnknownPermission";

export class PermissionsFactory {
  public static instance: PermissionBase;
  private constructor() { }

  public static getInstance() {
    console.log(this.instance)
    if (this.instance) {
      return this.instance;
    } else {
      const role = localStorage.getItem('role');
      switch (role) {
        case Role.SUPERUSER:
          this.instance = new SuperuserPermission();
          break;
        case Role.ADMIN:
          this.instance = new AdminPermission();
          break;
        default: Role.UNKNOWN
          this.instance = new UnknownPermission();
          break;
      }
    }
  }
}