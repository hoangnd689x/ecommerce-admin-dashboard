import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { PermissionManagerService } from './PermissionManagerService';
import { PermissionType } from '../Model/Permission/PermissionType';

@Directive({
  selector: '[checkPermission]'
})
export class IsGrantedDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionManagerS: PermissionManagerService
  ) { } 
  
  @Input() set checkPermission(permission: PermissionType) {
    this.isGranted(permission);
  } 
  
  private isGranted(permission: PermissionType) {
    console.log(permission);
    if (this.permissionManagerS.isGranted(permission)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
