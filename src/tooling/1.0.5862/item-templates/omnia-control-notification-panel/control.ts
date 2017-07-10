import { Component, NgModule, Inject, ViewContainerRef, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OmniaControl, BootstrapComponent, OmniaControlBase, OmniaExtensibilityCommonModule, OmniaExtensibilityFormModule, 
    Utils, NotificationPanel, ControlConfigService, StatisticService} from "@omnia/foundation/extensibility";
import { Control } from "@omnia/foundation/models";
import { $fileinputname$SettingsForm} from "./$fileinputname$Settings";


export interface I$fileinputname$Scope extends Control.IControlScope {
    config?: any;
    ableToEditSettings?: boolean;
	settingComponent?:any;
    items?:Array<{id:number, title:string, isNew?:boolean}>;
}

@OmniaControl({
    id: $fileinputname$Component.controlId,
    selector: '<YourComponentSelectorHere>',
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
    public static controlId = '$guid1$';
	public scope: I$fileinputname$Scope;
	private defaultSettings = {
        name: "Hellow World",
    };
	
    constructor( 
        @Inject(ViewContainerRef) public viewContainer: ViewContainerRef, 
        @Inject(ControlConfigService) public controlConfigService: ControlConfigService,
        @Inject(StatisticService) private statisticService: StatisticService) {
        super(viewContainer, controlConfigService);
    }

    ngOnInit() {
        this.init();
    }

    private init = () => {
        this.scope = {};

		this.controlConfigService.initControlConfigScope(this.scope, this.viewContainer.element.nativeElement,
            "", "", this.defaultSettings, this.canEditSettings, this.onSettingsChangedHandler, $fileinputname$SettingsForm);

        this.statisticService.initControlWithViewedHistoryScope(this.scope, jQuery(this.viewContainer.element.nativeElement).parent()[0], this.getItemIds);
        this.loadData();
    }

    private loadData = () =>{
        this.scope.items = [{id:1, title:'test', isNew:true}];
        this.publishNewDataCountToNotificationPanel();
    }

    private publishNewDataCountToNotificationPanel = () => {
        if (!Utils.isNullOrEmpty(this.scope.items)) {

            // Counting the number of new items
            var notificationCount = this.scope.items.filter((item) => { return item.isNew; }).length;

            // Send the count of new items to notification panel and set the items status as viewed in database
            this.statisticService.publishNewDataNotification(this.scope, notificationCount);
        }                    
    }

    private getItemIds = (): Array<string> => {
        if (!Utils.isNullOrEmpty(this.scope.items)) {
            return this.scope.items.map((item) => { return item.id; });
        }

        return [];
    }

    private canEditSettings = (): boolean => {
        return _omniaContextInfo.userPermissions.hasFullPagePermission;
    }

    private onSettingsChangedHandler = () => {
        // reload Omnia Control when settings have changed
    }
}

NotificationPanel.registerNotificationPanelControl($fileinputname$Component.controlId, "Put localization for OmniaControl1Controller's display name here");

@NgModule({
    bootstrap: [BootstrapComponent],
    declarations: [$fileinputname$Component, $fileinputname$SettingsForm],
    entryComponents: [$fileinputname$Component, $fileinputname$SettingsForm],
    imports: [BrowserModule, OmniaExtensibilityCommonModule],
    exports: [$fileinputname$Component]
})
export class $fileinputname$Module { }

