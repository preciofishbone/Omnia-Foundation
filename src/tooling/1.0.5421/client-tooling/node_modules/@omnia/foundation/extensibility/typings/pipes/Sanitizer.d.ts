import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
export declare class SanitizeHtml implements PipeTransform {
    private _sanitizer;
    constructor(_sanitizer: DomSanitizer);
    transform(v: string): SafeHtml;
}
