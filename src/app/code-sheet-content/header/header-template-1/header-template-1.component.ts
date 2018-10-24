import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { PatientService } from "app/shared-services/patient.service";

@Component({
  selector: 'header-1',
  templateUrl: './header-template-1.component.html',
  styleUrls: ['./header-template-1.component.css']
})
export class HeaderTemplate1Component implements OnInit {

    @Input() public Index:number;
    @Input() public Name: number;
    @Input() public Weight: number;
    @Input() public Height: number;
    @Input() public Length: number;
    @Input() public BSA: number;
    @Input() public Age: number;
    @Input() Title: string;
    public fname: string;
    public lname: string;
    public weight: string;
    public height: string;
    public bsa: string;
    public age: string;

    constructor (
      public PatientInfo: PatientService
      ){}

  ngOnInit() {
  }
  ngOnChanges(){
    if(this.PatientInfo.patients.length>0 && this.Index>=0){
      var fn,ln,w,h,b,a:any;
      fn = this.PatientInfo.getFirstName(this.Index);
      ln = this.PatientInfo.getLastName(this.Index);
      w = this.PatientInfo.getWeight(this.Index);
      h = this.PatientInfo.getHeight(this.Index);
      b = this.PatientInfo.getBSA(this.Index);
      a = this.PatientInfo.getAge(this.Index);
      if(typeof w == "string"){
        w = parseFloat(w)
      }
      if(typeof h == "string"){
        h = parseFloat(h)
      }
      if(typeof b == "string"){
        b = parseFloat(b)
      }
      if(typeof a == "string"){
        a = parseFloat(a)
      } 
      w = w.toFixed(2);
      h = h.toFixed(2);
      b = b.toFixed(2);
      a = a.toFixed(2);

      this.fname = fn;
      this.lname = ln;
      this.weight = w;
      this.height = h;
      this.bsa = b;
      this.age = a;
    }
  }


}
