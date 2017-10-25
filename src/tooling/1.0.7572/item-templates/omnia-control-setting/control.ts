import { Component, NgModule, Inject, ViewContainerRef, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Core, OmniaControl, BootstrapComponent, OmniaControlBase, OmniaExtensibilityCommonModule, OmniaExtensibilityFormModule, ControlConfigService, LocalizationService, LocalizePrefix} from "@omnia/foundation/extensibility";
import { Control } from "@omnia/foundation/models";
import { $fileinputname$SettingsForm, $fileinputname$SettingsFormModule} from "./$fileinputname$Settings";


export interface I$fileinputname$Scope extends Control.IControlScope {
    config?: any;
	settingComponent?:any;
}

@OmniaControl({
    id: '$guid1$',
    selector: '<YourComponentSelectorHere>',
    title: '$fileinputname$',
    icon: 'fa-cube',
    group: 'Custom',
    showInPageDesigner: true,
    enableSettings: true,
    providers: [LocalizationService, LocalizePrefix("")],
    enableAot: true,
    modulePath: '<your module ngfactory path>#$fileinputname$ModuleNgFactory',
    templateId: "<tenant resource id for '$fileinputname$.html' here>",
    imports: [OmniaExtensibilityCommonModule, OmniaExtensibilityFormModule, $fileinputname$SettingsFormModule]
})
@Component({
    selector: '<YourComponentSelectorHere>',
    templateUrl: '$fileinputname$.html'
})
export class $fileinputname$Component extends OmniaControlBase implements OnInit {
	public scope: I$fileinputname$Scope = {};
	private defaultSettings = {
        name: "Hellow World",
    };
	
    constructor( @Inject(ViewContainerRef) public viewContainer: ViewContainerRef, @Inject(ControlConfigService) public controlConfigService: ControlConfigService) {
        super(viewContainer, controlConfigService);
    }

    ngOnInit() {
        this.init();
    }

    private init = () => {
		this.controlConfigService.initControlConfigScope(this.scope, this.viewContainer.element.nativeElement,
            "", "", this.defaultSettings, this.canEditSettings, this.onSettingsChangedHandler, $fileinputname$SettingsForm, $fileinputname$SettingsFormModule);
    }

    private canEditSettings = (): boolean => {
        return Core.getContextInfo().userPermissions.hasFullPagePermission;
    }

    private onSettingsChangedHandler = () => {
        // reload Omnia Control when settings have changed
    }
}

@NgModule({
    bootstrap: [BootstrapComponent],
    declarations: [$fileinputname$Component],
    entryComponents: [$fileinputname$Component],
    imports: [BrowserModule, OmniaExtensibilityCommonModule, OmniaExtensibilityFormModule, $fileinputname$SettingsFormModule],
    exports: [$fileinputname$Component]
})
export class $fileinputname$Module { }