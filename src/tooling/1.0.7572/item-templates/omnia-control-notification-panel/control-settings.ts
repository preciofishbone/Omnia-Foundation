import { Component, Inject, ViewContainerRef} from '@angular/core';
import { DialogRef} from 'angular2-modal';
import { Control } from "@omnia/foundation/models";
import {TemplateId, ControlConfigService, BaseDialogComponent, BaseDialogModel } from "@omnia/foundation/extensibility";

export interface I$fileinputname$SettingsFormScope {
    config?: I$fileinputname$Settings;
    containerId?: string;
}

export interface I$fileinputname$Settings extends Control.IControlConfig {
    settings?: {
        name?: string;
    }
}

@TemplateId("<tenant resource id for '$fileinputname$Settings.html' here>")
@Component({
    selector: '<YourComponentSelectorHere>',
    templateUrl:'$fileinputname$Settings.html'
})
export class $fileinputname$SettingsForm extends BaseDialogComponent<BaseDialogModel<I$fileinputname$SettingsFormScope>> {

    public isSaving: boolean = false;

    constructor(
        @Inject(DialogRef) public dialog: DialogRef<BaseDialogModel<I$fileinputname$SettingsFormScope>>,
        @Inject(ControlConfigService) public controlConfigService: ControlConfigService
    ) {
        super(dialog);
    }

    public save = () => {
		this.isSaving = true;
        this.controlConfigService.setConfig(this.context.params.containerId, this.context.params.config, () => {
            this.isSaving = false;
            this.dialog.close();
        });
    }
}
