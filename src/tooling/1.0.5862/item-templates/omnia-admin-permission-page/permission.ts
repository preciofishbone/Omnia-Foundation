import { Inject} from '@angular/core';
import { Security } from "@omnia/foundation/models";
import {
    OmniaAdminPermissionBase, OmniaExtensibilityAdminModule,
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
        state: "fileinputnamestate'",
        url: "permission",
        iconClass: "fa-key",
        authorizedRoles: authorizedRoles,
        insertTo: [] // inject to parent navigation node ex : [{ state:'systemsettings', order:1}]
    },
    templateId:"", // TODO: Put the tenant resource id of '$fileinputname$.html' here
})
export class $fileinputname$ extends OmniaAdminPermissionBase {
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

