import { Inject} from '@angular/core';
import { Security } from "@omnia/foundation/models";
import {
    OmniaAdminPermissionBase, OmniaExtensibilityAdminModule,OmniaAdminControl,
    LocalizePrefix, Enums, PermissionScopes, PermissionRoles, TemplateId, AdminAuthorizationService
} from '@omnia/foundation/extensibility';


let authorizedRoles = [
    {
        name: PermissionRoles.OmniaAdmin,
        scope: PermissionScopes.Tenant
    }
] 

@OmniaAdminControl({
    selector: '<YourComponentSelectorHere>',
    navigation: {
        title: "", // TODO: Put the localization of your settings page display name here
        state: "$fileinputname$permissionstate'",
        url: "permission",
        iconClass: "fa-key",
        authorizedRoles: authorizedRoles,
    },
    templateId:"", // TODO: Put the tenant resource id of '$fileinputname$Permission.html' here
})
export class $fileinputname$Permission extends OmniaAdminPermissionBase {
    roleDefinitionList: Array<Security.IPermissionRoleDefinition> = [];

    constructor(
        @Inject(AdminAuthorizationService) public authorizationService: AdminAuthorizationService) {
        super(authorizationService, authorizedRoles);
        if (this._isAuthorized)
            this.init();
    }

    private init = () => {
        this.roleDefinitionList = [
            {
                name: "$fileinputname$Settings.Admin",
                scope: PermissionScopes.Tenant,
                label: "$fileinputname$Settings.Permissions.Admin.Label",
                description: "$fileinputname$Settings.Permissions.Admin.Description"
            }
        ];
    }
}

