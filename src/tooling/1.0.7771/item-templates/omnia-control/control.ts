import { TemplateId, Component, NgModule, Inject, ViewContainerRef, OnInit} from '@angular/core';
import { OmniaControl, OmniaControlBase, OmniaExtensibilityCommonModule, ControlConfigService, LocalizationService, LocalizePrefix} from "@omnia/foundation/extensibility";

@TemplateId("tenant resource id for '$fileinputname$.html' here>") // TemplateId here use for live reload in Jit mode, otherwise remove it.
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

@OmniaControl({
    id: '$guid1$',
    bootstrapComponent: $fileinputname$Component,
    title: '$fileinputname$',
    icon: 'fa-cube',
    group: 'Custom',
    showInPageDesigner: true,
    ngfactoryModulePath: '<your module ngfactory path>#$fileinputname$ModuleNgFactory'
})
@NgModule({
    declarations: [$fileinputname$Component],
    entryComponents: [$fileinputname$Component],
    providers: [LocalizationService, LocalizePrefix("")],
    imports: [OmniaExtensibilityCommonModule],
    exports: [$fileinputname$Component]
})
export class $fileinputname$Module { }