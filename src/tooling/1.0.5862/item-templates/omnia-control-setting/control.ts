import { Component, NgModule, Inject, ViewContainerRef, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Core, OmniaControl, BootstrapComponent, OmniaControlBase, OmniaExtensibilityCommonModule, OmniaExtensibilityFormModule, ControlConfigService, LocalizationService, LocalizePrefix} from "@omnia/foundation/extensibility";
import { Control } from "@omnia/foundation/models";
import { $fileinputname$SettingsForm} from "./$fileinputname$Settings";


export interface I$fileinputname$Scope extends Control.IControlScope {
    config?: any;
    ableToEditSettings?: boolean;
	settingComponent?:any;
}

@OmniaControl({
    id: '$guid1$',
    selector: '<YourComponentSelectorHere>',
    providers: [LocalizationService, LocalizePrefix("")],
    showInPageDesigner: false,
    enableAot: true,
    modulePath: '<your module ngfactory path>#$fileinputname$ModuleNgFactory',
    templateId: "<tenant resource id for '$fileinputname$.html' here>",
	declarations: [$fileinputname$SettingsForm],
    entryComponents: [$fileinputname$SettingsForm],
    imports: [OmniaExtensibilityCommonModule]
})
@Component({
    selector: '<YourComponentSelectorHere>',
    templateUrl: '$fileinputname$.html'
})
export class $fileinputname$Component extends OmniaControlBase implements OnInit {
	public scope: I$fileinputname$Scope;
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
            "", "", this.defaultSettings, this.canEditSettings, this.onSettingsChangedHandler, $fileinputname$SettingsForm);
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
    declarations: [$fileinputname$Component, $fileinputname$SettingsForm],
    entryComponents: [$fileinputname$Component, $fileinputname$SettingsForm],
    imports: [BrowserModule, OmniaExtensibilityCommonModule],
    exports: [$fileinputname$Component]
})
export class $fileinputname$Module { }