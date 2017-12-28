import { Component, NgModule, Inject, ViewContainerRef, OnInit} from '@angular/core';
import { TemplateId, Core, OmniaControl, OmniaControlBase, OmniaExtensibilityCommonModule, OmniaExtensibilityFormModule, ControlConfigService, LocalizationService, LocalizePrefix} from "@omnia/foundation/extensibility";
import { Control } from "@omnia/foundation/models";
import { $fileinputname$SettingsForm, $fileinputname$SettingsFormModule} from "./$fileinputname$Settings";


export interface I$fileinputname$Scope extends Control.IControlScope {
    config?: any;
	settingComponent?:any;
}

@TemplateId("tenant resource id for '$fileinputname$.html' here>") // TemplateId here use for live reload in Jit mode, otherwise remove it.
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

@OmniaControl({
    id: '$guid1$',
    title: '$fileinputname$',
    icon: 'fa-cube',
    group: 'Custom',
    showInPageDesigner: true,
    enableSettings: true,
    bootstrapComponent: $fileinputname$Component,
    ngfactoryModulePath: '<your module ngfactory path>#$fileinputname$ModuleNgFactory'
})
@NgModule({
    declarations: [$fileinputname$Component],
    entryComponents: [$fileinputname$Component],
    providers: [LocalizationService, LocalizePrefix("")],
    imports: [OmniaExtensibilityCommonModule, OmniaExtensibilityFormModule, $fileinputname$SettingsFormModule],
    exports: [$fileinputname$Component]
})
export class $fileinputname$Module { }