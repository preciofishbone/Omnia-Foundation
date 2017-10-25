import { Inject, OnInit, ViewContainerRef } from '@angular/core';
import { OmniaAdminControl, OmniaExtensibilityAdminModule, OmniaAdminPermissionBase, NavigationScope, PermissionScopes, AdminAuthorizationService, LocalizationService, LocalizePrefix } from '@omnia/foundation/extensibility';

let authorizedRoles = [
    {
        name: '$fileinputname$Settings.Admin',
        scope: PermissionScopes.Tenant
    }
] 

@OmniaAdminControl({
    selector: '<YourComponentSelectorHere>',
    imports: [OmniaExtensibilityAdminModule],
    navigation: {
        title: "", // TODO: Put the localization of your settings page display name here
        state: "$fileinputname$state",
        url: "$fileinputname$",
        iconClass: "fa-bars",
        authorizedRoles: authorizedRoles,
        children: [],
        insertTo: [] // inject to parent navigation node ex : [{ state:'systemsettings', order:1}]
    },
    templateId:"", // TODO: Put the tenant resource id of '$fileinputname$.html' here
})
export class  $fileinputname$Settings extends OmniaAdminPermissionBase implements OnInit {
    constructor( 
        @Inject(ViewContainerRef) private viewContainer: ViewContainerRef,
        @Inject(AdminAuthorizationService) public authorizationService: AdminAuthorizationService) {
        super(authorizationService, authorizedRoles);
        if (this._isAuthorized)
            this.init();
    }


    private init = () => {
    }  

    ngOnInit() {
    }
}
