// Not implemented
// $viewId$
// $tenantResourceId$

import { Component, NgModule, Inject, ViewContainerRef, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BootstrapComponent, OmniaControlBase, OmniaExtensibilityCommonModule, OmniaExtensibilityFormModule, ControlConfigService} from "@omnia/foundation/extensibility";
import { Control } from "@omnia/foundation/models";

export interface IFileNameControlScope extends Control.IControlScope {
    welcomePageUrl?: string;
    config?: any;
    ableToEditSettings?: boolean;
    isNotExternalUser?: boolean;
}

@OmniaControl({
    id: '$tenantResourceId$',
    selector: '<YourComponentSelectorHere>',
    enableAot: true,
    modulePath: '<your module ngfactory path>#$fileinputname$ModuleNgFactory',
    templateId: "$viewId$",
    imports: [OmniaExtensibilityCommonModule]
})
@Component({
        selector: '<YourComponentSelectorHere>',
    templateUrl: '$fileinputname$.html'
})
export class $fileinputname$Component extends OmniaControlBase implements OnInit {

    constructor( @Inject(ViewContainerRef) private viewContainer: ViewContainerRef, @Inject(ControlConfigService) private controlConfigService: ControlConfigService) {
        super(viewContainer, controlConfigService);
    }

    ngOnInit() {
        this.init();
    }

    private init = () => {
    }
}

@NgModule({
    bootstrap: [BootstrapComponent],
    declarations: [$fileinputname$Component],
    entryComponents: [$fileinputname$Component],
    imports: [BrowserModule, OmniaExtensibilityCommonModule],
    exports: [$fileinputname$Component]
})
export class $fileinputname$Module { }