import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { HttpService } from "app/shared-services/http.service";
import { DrugService } from "app/shared-services/drug.service";
import { PatientService } from "app/shared-services/patient.service";
import {PatientBulk} from "../../interfaces/patient-bulk";
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { RouteConverterService } from "../../shared-services/route-converter.service";
import {Codesheet} from "../../home-outlets/codesheet";
import { IDrugTable } from "../../interfaces/drug-table"

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent extends Codesheet implements OnInit {

  public codesheetSelect: number = 0;
  public MultiDrugTable: IDrugTable[][];
  public patients:PatientBulk[] = [{
    firstName: null,
    lastName: null,
    weight: null,
    height: null,
    dob: null
}];
//gen veriable!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  public gen: boolean = false;
  public codesheets:{name:string,index:number}[] = [
    {
      name:"Select",index:0
    }
    ,{
      name:"Anaphylactic",index:1
    }
    ,{
      name:"Seizure",index:2
    }
    ,{
      name:"PICU",index:3
    }
    ,{
      name:"NICU",index:4
    }
    ,{
      name:"OR",index:5
    }
  ]
  
  ngOnInit() { this.MultiDrugTable = []; this.gen=false;}

  PushList(){
      this.patients.push({
        firstName: null,
        lastName: null,
        weight: null,
        height: null,
        dob:null
    })
  }
  ChangeSTRValue(index:number,property:string,value:string){
    eval("this.patients[index]."+property+"='"+value.toString()+"'");
  }
  ChangeNumValue(index:number,property:string,value:number){
    eval("this.patients[index]."+property+"="+value);
  }
  ChangeDateValue(index:number,property:string,value:Date){
    eval("this.patients[index]."+property+"="+value);
  }
  show(val:any){
    console.log(val.slice(0,4));
    console.log(val.slice(5,7));
    console.log(val.slice(8,10));
    console.log(val);
  }
  DeleteRow(index){
    if(this.patients.length>1){
      this.patients.splice(index,1);
    } else {
        this.patients[0] = {
          firstName: null,
          lastName: null,
          weight: null,
          height: null,
          dob:null
      }
    }
  }
  async GenerateCodesheet(){
    this.p.pushInfoAll(this.patients);
    var table: IDrugTable[][] = await this.getCodesheets(this.codesheetSelect);
    return table;
  }
  async FillCheckList(){
    this.MultiDrugTable = []
    var count:number = 0
    var truth:boolean = true
    if(this.codesheetSelect==0){
      alert("Please select a codesheet to print before proceeding.");
      truth = false;
      return truth;
    }
    while(count<this.patients.length&&truth==true){
      truth = this.FillCheck(
                              count
                              ,this.patients[count].firstName
                              ,this.patients[count].lastName
                              ,this.patients[count].weight
                              ,this.patients[count].height
                              ,this.patients[count].dob
                            )
      count += 1
    }
    this.MultiDrugTable = await this.GenerateCodesheet()    
    this.gen= truth;
  }
  FillCheck(index,fn?,ln?,w?,h?,dob?){
    //console.log("Rows info: "+index+"|"+fn+"|"+ln+"|"+w+"|"+h+"|"+dob)
    //console.log(this.patients.length)
    var ret1, ret2;
    ret1 = " of patient #"
    ret2 = " not filled out.\n Please fill out all fields before continueing."
    if(fn==null||fn==""){
      alert("First name"+ret1+(index + 1)+ret2);
      return false;
    } else if(ln==null||ln==""){
      alert("Last name"+ret1+(index + 1)+ret2);
      return false;
    } else if(w==null||w==""){
      alert("Weight"+ret1+(index + 1)+ret2);
      return false;
    } else if(h==null||w==""){
      alert("Height"+ret1+(index + 1)+ret2);
      return false;
    } else if(dob==null||dob==""){
      alert("Date of birth"+ret1+(index + 1)+ret2);
      return false;
    }
     else {
      return true;
    }
  }
}
