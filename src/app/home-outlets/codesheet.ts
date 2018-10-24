import { OnInit,Input,Injectable } from '@angular/core';
import { HttpService } from "app/shared-services/http.service";
import { DrugService } from "app/shared-services/drug.service";
import { PatientService } from "app/shared-services/patient.service";
import { ActivatedRoute } from "@angular/router";
import { RouteConverterService } from "app/shared-services/route-converter.service";
import { IDrugTable } from "../interfaces/drug-table";

@Injectable()
export class Codesheet {
    @Input() tables: IDrugTable[];

    constructor(public http: HttpService,
        public ds: DrugService,
        public p: PatientService,
        public route: ActivatedRoute,
        public rcs: RouteConverterService) {
    }

    async getTables(codesheet:number) {
        this.ds.DSTable = [];
        var table:IDrugTable[] = await this.http.getTables(
            codesheet,
            this.p.getWeight(0),
            this.p.getHeight(0),
            this.p.getAge(0)
        );
        this.ds.DSTable.push(table);
    }

    async assignTables(codesheet:number,tableIndex:number){
        if(tableIndex == -1){
            await this.getTables(codesheet);
            return this.ds.DSTable[0];
        }
    }

    async getCodesheets(codesheet:number){
        this.ds.DSTable = [];
        var post: {weight:number,height:number,age:number}[] = [];
        //console.log("Here is the weight "+this.p.patients[0].Weight)
        for(var i=0,len=this.p.patients.length;i<len;i++){
            post.push(
                {weight:this.p.patients[i].Weight,
                height:this.p.patients[i].Height,
                age:this.p.patients[i].Age}
            )
        }
        var table:IDrugTable[][] = await this.http.getForms({index:codesheet,patients:post});
        //this.ds.DSTable = await this.http.getForms({index:codesheet,patients:post});
        return table;
    }
}
