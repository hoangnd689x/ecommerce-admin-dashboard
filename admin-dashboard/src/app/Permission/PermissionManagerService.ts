import { PermissionBase } from "../Model/Permission/PermissionBase";
import { PermissionsFactory } from "./PermissionsFactory";
import { PermissionType } from "../Model/Permission/PermissionType";
import { Role } from "../Model/Permission/Role";

export class PermissionManagerService {
        private permissions: PermissionBase;
    constructor() { }

    isGranted(permission: PermissionType) {
        const permissions = PermissionsFactory.getInstance().permissions;
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
        this.permissions = PermissionsFactory.getInstance();
        console.log(this.permissions);
        console.log(localStorage.getItem('role'));
    }
}