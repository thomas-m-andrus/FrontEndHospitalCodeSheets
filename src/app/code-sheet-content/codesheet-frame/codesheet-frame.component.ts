import { Component, OnInit, Input} from '@angular/core';
import { HttpService } from "app/shared-services/http.service";
import { DrugService } from "app/shared-services/drug.service";
import { PatientService } from "app/shared-services/patient.service";
import { ActivatedRoute } from "@angular/router";
import { RouteConverterService } from "app/shared-services/route-converter.service";

@Component({
  selector: 'codesheet-frame',
  templateUrl: './codesheet-frame.component.html',
  styleUrls: ['./codesheet-frame.component.css']
})

//This component handles all http requests, Patient info changes, and also url snapshot info
export class CodesheetFrameComponent implements OnInit {
  @Input() public codesheet: number;

  constructor(
    public http: HttpService, 
    public ds: DrugService, 
    public p: PatientService, 
    public route: ActivatedRoute,
    public rcs: RouteConverterService
  ) { }

  async ngOnInit() {
    /*console.log("frame initialized")
    this.ds.DSTable = []
    if(this.p.getCodesheet() == -1){
      console.log("TESTING");
    } else {
      this.ds.DSTable = await this.http.getTables(
      this.codesheet,
      this.p.getWeight(),
      this.p.getHeight(),
      this.p.getAge()
      );
    }*/
  }
}
