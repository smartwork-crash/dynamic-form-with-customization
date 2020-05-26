import { Component,Inject, OnInit,ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import {ModalService} from './modal/modal.service';
import { v4 } from 'uuid';
import { Validators } from "@angular/forms";
import {MatDialog, MatDialogRef,MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";

export interface Tile {
  cols: number;
  rows: number;
  recieve: string;
}
export interface Property{
  colspan:number;
  required:boolean;
  label:string;
  hint:string;
  placeholder:string;
  name:string;
  option:Selection[];
  value:Date;
}
export interface Selection{
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./modal/modal.component.less']
})
export class AppComponent implements OnInit {
  property:any[]=[];
  propertyToDisplay:any[]=[];
  allInputs:any;
  recieve:any = "";
  question:any;
  toggle:any;
  length:number=3;
  formcode:any;
  color:string="blue"
  checked:boolean = true;
  codes: Tile[] = [];
  fieldArray: Array<any> = [
    {
      'name': 'option 1'
    },
    {
      'name': 'option 2'
    }
  ];
  newAttribute: any = {};
  propertyOpenForEdit: number;

  firstField = true;
  firstFieldName = 'First Item name';
  isEditItems: boolean;

  constructor(private http:Http,public modalService:ModalService,public dialog: MatDialog){}

  ngOnInit(){
    this.http.get('../assets/Inputs.json').subscribe(data=>{
      console.log(JSON.parse(data['_body']));
      this.allInputs = JSON.parse(data['_body']);
    })
  }

  transferDataSuccess($event: any) {
    console.log($event.dragData);
    for(let i=0;i<this.allInputs.length;i++){
      if(this.allInputs[i].type==$event.dragData){
        this.recieve = this.allInputs[i].code;
        this.codes.push({cols:1,rows:1,recieve:this.recieve});
      }
      
    }
    this.property.push({
      id:v4(),
      type:$event.dragData,
      inputtype:"",
      colspan:0,
      required:false,
      label:$event.dragData,
      hint:"",
      placeholder:"",
      name:"",
      option:[],
      value:""
    })
    this.propertyToDisplay.push([{
      id:v4(),
      type:$event.dragData,
      inputtype:"",
      colspan:0,
      required:false,
      label:$event.dragData,
      hint:"",
      placeholder:"",
      name:"",
      option:[],
      value:""
    }])
    console.log(this.recieve);
    console.log(this.codes);
    console.log(this.property);
    console.log(this.propertyToDisplay);
}
toggleevent(event){
console.log(event);
this.toggle="disable"
}

getQuestion(ques){
  console.log(ques);
this.question = ques;
const dialogRef = this.dialog.open(PreviewComponent, {
  data: { name: this.property }
});

}
colLength(value){
  if(value==1){
    this.length=this.length + 1;
  }
  else if(value==2){
    this.length=this.length - 1;
  }
}
openModal(id: string, index: number) {
  this.modalService.open(id);
  this.propertyOpenForEdit = index;
}

closeModal(id: string) {
  this.modalService.close(id);
  
}

addFieldValue(index) {
  if (this.fieldArray.length <= 2) {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
  } else {

  }
}

deleteFieldValue(index) {
  this.fieldArray.splice(index, 1);
}

onEditCloseItems() {
  this.isEditItems = !this.isEditItems;
}
}




@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
 
})
export class PreviewComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  regConfig: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<PreviewComponent>){}
  ngOnInit(){
    this.regConfig=this.data.name;
  }
}

