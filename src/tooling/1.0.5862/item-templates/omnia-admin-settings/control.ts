import { Inject, OnInit, ViewContainerRef } from '@angular/core';
import { OmniaAdminControl, OmniaExtensibilityAdminModule, LocalizePrefix, NavigationScope, PermissionScopes, LocalizationService, LocalizePrefix } from '@omnia/foundation/extensibility';

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
        authorizedRoles: [
            {
                name: '$fileinputname$Settings.Admin',
                scope: PermissionScopes.tenant
            }
        ],
        children: ['$fileinputname$permissionstate']
    },
    templateId:"", // TODO: Put the tenant resource id of '$fileinputname$.html' here
})
export class  $fileinputname$Settings implements OnInit {
    constructor( @Inject(ViewContainerRef) private viewContainer: ViewContainerRef) {
        this.init();
    }

    private init = () => {
    }  

    ngOnInit() {
    }
}
