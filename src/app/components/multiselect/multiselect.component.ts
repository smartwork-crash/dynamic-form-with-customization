import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
selector: "app-multiselect",
template: `
<mat-form-field class="demo-full-width margin-top" [formGroup]="group">
<mat-select [placeholder]="field.label" [formControlName]="field.name" multiple>
<mat-option *ngFor="let item of field.options" [value]="item.value">{{item.viewValue}}</mat-option>
</mat-select>
</mat-form-field>
`,
styles: []
})
export class MultiselectComponent implements OnInit {
field: FieldConfig;
group: FormGroup;
constructor() {}
ngOnInit() {}
}