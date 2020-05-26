import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import {DndModule} from 'ng2-dnd';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {
	MatAutocompleteModule,
	  MatButtonModule,
	  MatButtonToggleModule,
	  MatCardModule,
	  MatDividerModule,
	  MatChipsModule,
	  MatStepperModule,
	  MatDialogModule,
	  MatExpansionModule,
	  MatGridListModule,
	  MatIconModule,
	  MatInputModule,
	  MatListModule,
	  MatMenuModule,
	  MatNativeDateModule,
	  MatPaginatorModule,
	  MatProgressBarModule,
	  MatProgressSpinnerModule,
	  MatRippleModule,
	  MatSelectModule,
	  MatSidenavModule,
	  MatSliderModule,
	  MatSlideToggleModule,
	  MatSnackBarModule,
	  MatSortModule,
	  MatTableModule,
	  MatTabsModule,
	  MatToolbarModule,
	  MatTooltipModule,
 
  } from '@angular/material';
  import {MatCheckboxModule} from '@angular/material/checkbox';
  import {MatDatepickerModule} from '@angular/material/datepicker';
  import {MatRadioModule} from '@angular/material/radio';

import { PreviewComponent } from './app.component';
import { InnerHtmlPipe } from './inner-html-pipe';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { DateComponent } from './components/date/date.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import {ModalComponent} from './modal/modal.component';
import {ModalService} from './modal/modal.service';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { MultiselectComponent } from './components/multiselect/multiselect.component';
import { TextareaComponent } from './components/textarea/textarea.component'

@NgModule({
  declarations: [
	AppComponent,
	ModalComponent,
	PreviewComponent,
	InnerHtmlPipe,
	InputComponent,
	ButtonComponent,
	SelectComponent,
	DateComponent,
	RadiobuttonComponent,
	CheckboxComponent,
	DynamicFieldDirective,
	DynamicFormComponent,
	MultiselectComponent,
	TextareaComponent
  ],
  imports: [
	BrowserAnimationsModule,
	ReactiveFormsModule,
	CommonModule,
	FormsModule,
    HttpModule,
    MatAutocompleteModule,
	  MatButtonModule,
	  MatButtonToggleModule,
	  MatCardModule,
	  MatDividerModule,
	  MatCheckboxModule,
	  MatChipsModule,
	  MatStepperModule,
	  MatDatepickerModule,
	  MatDialogModule,
	  MatExpansionModule,
	  MatGridListModule,
	  MatIconModule,
	  MatInputModule,
	  MatListModule,
	  MatMenuModule,
	  MatNativeDateModule,
	  MatPaginatorModule,
	  MatProgressBarModule,
	  MatProgressSpinnerModule,
	  MatRadioModule,
	  MatRippleModule,
	  MatSelectModule,
	  MatSidenavModule,
	  MatSliderModule,
	  MatSlideToggleModule,
	  MatSnackBarModule,
	  MatSortModule,
	  MatTableModule,
	  MatTabsModule,
	  MatToolbarModule,
    MatTooltipModule,
    DndModule.forRoot(),
  ],
  providers: [ModalService],
  bootstrap: [AppComponent],
  entryComponents: [
	PreviewComponent,
	InputComponent,
	ButtonComponent,
	SelectComponent,
	DateComponent,
	RadiobuttonComponent,
	CheckboxComponent,
	MultiselectComponent,
	TextareaComponent
]
})
export class AppModule { }
