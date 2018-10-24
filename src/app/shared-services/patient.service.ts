import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RouteConverterService } from "./route-converter.service";
import {PatientBulk} from '../interfaces/patient-bulk'

@Injectable()

export class PatientService implements OnInit {
    constructor(public rcs:RouteConverterService){}
     patients:{
        FirstName: string,
        LastName: string,
        Weight: number,
        Height: number,
        BSA: number,
        Month: number,
        Date: number,
        Year: number,
        Age: number
    }[];

    ngOnInit(){
    }

// All Get Requests
    getFirstName(index){
        return this.patients[index].FirstName;
    }

    getLastName(index){
        return this.patients[index].LastName;
    }

    getWeight(index){
        return this.patients[index].Weight;
    }
    
    getHeight(index){
        return this.patients[index].Height;
    }
    getBSA(index){
        return this.patients[index].BSA;
    }
    
    getMonth(index){
        return this.patients[index].Month;
    }
    
    getDate(index){
        return this.patients[index].Date;
    }
    
    getYear(index){
        return this.patients[index].Year;
    }
    
    getAge(index){
        return this.patients[index].Age;
    }

// These are the Basic property mutators


    changeFirstName(index:number, FName: string){
        this.patients[index].FirstName = FName;
    }
    changeLastName(index:number,LName: string){
        this.patients[index].LastName = LName;
    }
    changeWeight(index:number,weight: number){
        this.patients[index].Weight = weight;
    }
    changeBSA(index:number,bsa: number){
        this.patients[index].BSA =  bsa;
    }
    changeMonth(index:number,prop: number){
        this.patients[index].Month = prop;
    }
    changeDate(index:number,prop: number){
        this.patients[index].Date = prop;
    }
    changeYear(index:number,prop: number){
        this.patients[index].Year = prop;
    }
    changeAge(index:number,years: number){
        this.patients[index].Age = years;
    }
    changeHeight(index:number,height: number){
      this.patients[index].Height = height;
    }
// Grouped Functions



// This is a grouped function to change all of the properties at once
changeInfoAll(FN: string, LN: string, W: number, H: number, M: number, D: number, Y: number, A: number, bsa: number,i?:number){
    if(this.patients){
        if(i!=null){
            this.changeFirstName(i,FN);
            this.changeLastName(i,LN);
            this.changeWeight(i,W);
            this.changeHeight(i,H);
            this.changeMonth(i,M);
            this.changeDate(i,D);
            this.changeYear(i,Y);
            this.changeAge(i,A);
            this.changeBSA(i,bsa);
        } else {
            this.patients.push({
                FirstName:FN,
                LastName:LN,
                Weight:W,
                Height:H,
                BSA:bsa,
                Month:M,
                Date:D,
                Year:Y,
                Age:A
            })
        }
        
         
    } else {
        this.patients = [{
            FirstName:FN,
            LastName:LN,
            Weight:W,
            Height:H,
            BSA:bsa,
            Month:M,
            Date:D,
            Year:Y,
            Age:A
        }]
    }   
}

// Push list
pushInfoAll(PatientPushList:PatientBulk[]){
    this.patients = [];
    var count = 0;
    PatientPushList.forEach(p => {
        this.changeInfoAll(
            p.firstName
            ,p.lastName
            ,p.weight
            ,p.height
            ,parseInt(p.dob.slice(5,7))
            ,parseInt(p.dob.slice(8,10))
            ,parseInt(p.dob.slice(0,4))
            ,this.rcs.calcAge(parseInt(p.dob.slice(0,4)))
            ,this.rcs.calcBSA(
              p.weight
              ,p.height
              )
        )
    });
}
// This is for testing purposes in order to determine what data exists in these areas



    displayInfo(i:number){

        console.log("FirstName: "+this.patients[i].FirstName);
        console.log("LastName: "+this.patients[i].LastName);
        console.log("Weight: "+this.patients[i].Weight);
        console.log("Height: "+this.patients[i].Height);
        console.log("Month: "+this.patients[i].Month);
        console.log("Date: "+this.patients[i].Date);
        console.log("Year: "+this.patients[i].Year);
        console.log("Age: "+this.patients[i].Age);
        console.log("BSA: "+this.patients[i].BSA);
    }

    displayAll(){
        console.clear();
        for(var i=0,len=this.patients.length;i<len;i++){
            this.displayInfo(i);
        }
    }

}
