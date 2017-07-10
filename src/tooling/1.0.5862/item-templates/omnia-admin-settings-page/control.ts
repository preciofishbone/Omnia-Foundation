import { Inject, OnInit, ViewContainerRef } from '@angular/core';
import { OmniaAdminControl, OmniaExtensibilityAdminModule, LocalizePrefix, NavigationScope, PermissionScopes} from '@omnia/foundation/extensibility';

@OmniaAdminControl({
    selector: '<YourComponentSelectorHere>',
    imports: [OmniaExtensibilityAdminModule],
    navigation: {
        title: "", // TODO: Put the localization of your settings page display name here
        state: "$fileinputname$state",
        url: "$fileinputname$",
        iconClass: "fa-bars",
        authorizedRoles: [
            {
                name: '$fileinputname$.Admin',
                scope: PermissionScopes.tenant
            }
        ],
        children: [],
        insertTo: [] // inject to parent navigation node ex : [{ state:'systemsettings', order:1}]
    },
    templateId:"", // TODO: Put the tenant resource id of '$fileinputname$.html' here
})
export class  $fileinputname$ implements OnInit {
    constructor( @Inject(ViewContainerRef) private viewContainer: ViewContainerRef) {
        this.init();
    }

    private init = () => {
    }  

    ngOnInit() {
    }
}
