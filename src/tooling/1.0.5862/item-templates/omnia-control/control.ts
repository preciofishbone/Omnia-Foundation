import { Component, NgModule, Inject, ViewContainerRef, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OmniaControl, BootstrapComponent, OmniaControlBase, OmniaExtensibilityCommonModule, OmniaExtensibilityFormModule, ControlConfigService} from "@omnia/foundation/extensibility";
import { Control } from "@omnia/foundation/models";


export interface I$fileinputname$Scope extends Control.IControlScope {
    config: any;
    ableToEditSettings: boolean;
	settingComponent:any;
}

@OmniaControl({
    id: '$guid1$',
    selector: '<YourComponentSelectorHere>',
    enableAot: true,
    modulePath: '<your module ngfactory path>#$fileinputname$ModuleNgFactory',
    templateId: "<tenant resource id for '$fileinputname$.html' here>",
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
            "", "", this.defaultSettings, null, null, null);
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