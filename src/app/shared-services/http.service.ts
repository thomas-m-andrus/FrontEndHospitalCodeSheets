import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { IDrugTable } from "../interfaces/drug-table";
import { PostObj } from "../interfaces/postobj";

@Injectable()
export class HttpService {
  url:string='http://codesheetsapi.azurewebsites.net/codesheetapi/'
  testurl:string='http://localhost:3000/codesheetapi/'

  constructor(public http: Http) { }

  async getTables(codesheet:number,weight:number,height:number,age:number){
    var response = await this.http.get(this.testurl+codesheet+'/'+weight+'/'+height+'/'+age).toPromise();
    return response.json();
  }
  async getForms(body:{index:number,patients:{weight:number,height:number,age:number}[]}){
    var response = await this.http.post(this.url+'multipatient',body).toPromise();
    return response.json();
  }
}
