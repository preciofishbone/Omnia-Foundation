import { Component, NgModule, Inject, ViewContainerRef, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OmniaControl, BootstrapComponent, OmniaControlBase, OmniaExtensibilityCommonModule, ControlConfigService} from "@omnia/foundation/extensibility";


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
	public name: string;
	
    constructor( @Inject(ViewContainerRef) public viewContainer: ViewContainerRef, @Inject(ControlConfigService) public controlConfigService: ControlConfigService) {
        super(viewContainer, controlConfigService);
    }

    ngOnInit() {
        this.init();
    }

    private init = () => {
        this.name = "Hello World";
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