import { Inject, OnInit, ViewContainerRef } from '@angular/core';
import { OmniaAdminControl, OmniaExtensibilityAdminModule, NavigationScope, PermissionScopes, AdminAuthorizationService, LocalizationService, LocalizePrefix } from '@omnia/foundation/extensibility';

let authorizedRoles = [
    {
        name: '$fileinputname$Settings.Admin',
        scope: PermissionScopes.Tenant
    }
] 

@OmniaAdminControl({
    selector: '<YourComponentSelectorHere>',
    providers: [LocalizationService, LocalizePrefix("")],
    imports: [OmniaExtensibilityAdminModule],
    navigation: {
        scope: NavigationScope.tenant,      
        title: "", // TODO: Put the localization of your settings page display name here
        state: "$fileinputname$state",
        url: "$fileinputname$",
        iconClass: "fa-bars",
        authorizedRoles: authorizedRoles,
        children: ['$fileinputname$permissionstate']
    },
    templateId:"", // TODO: Put the tenant resource id of '$fileinputname$.html' here
})
export class  $fileinputname$ extends OmniaAdminPermissionBase implements OnInit {
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
