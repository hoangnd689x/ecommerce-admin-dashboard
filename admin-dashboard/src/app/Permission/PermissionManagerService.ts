import { PermissionBase } from "../Model/Permission/PermissionBase";
import { PermissionsFactory } from "./PermissionsFactory";
import { PermissionType } from "../Model/Permission/PermissionType";
import { Role } from "../Model/Permission/Role";

export class PermissionManagerService {
        private permissions: PermissionBase;
    constructor() { }

    isGranted(permission: PermissionType) {
        console.log(PermissionsFactory.getInstance())
        const permissions = PermissionsFactory.getInstance().permissions;
        console.log(permissions)
        for (let perm of permissions) {
            if (perm === permission) {
                return true;
            }
        }
        return false;
    }

    authAs(role: Role) {
        localStorage.setItem('role',
            (role === null)
                ? Role.UNKNOWN
                : role
        );
        PermissionsFactory.updateInstance();
        this.permissions = PermissionsFactory.getInstance();
        
    }
}