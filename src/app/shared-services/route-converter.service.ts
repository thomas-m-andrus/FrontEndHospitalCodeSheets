import { Injectable } from '@angular/core';

@Injectable()
export class RouteConverterService {

  constructor() { }

  parsePToPeriod(strnum:string){
    var rnum: number;
    strnum = strnum.replace("p", ".");
    rnum = parseFloat(strnum);
    return rnum;
  }
  calcAge(Year:number){
    var today = new Date().getFullYear();
    var age;
    if((Year < today) && (Year != 0)){
        age = today - Year;
    } else{
        age = 0;
    }
    return age;
  }
  calcBSA(Weight:number, Height:number){
    var bsa = (Weight * Height)/3600;
    bsa = Math.sqrt(bsa);
    return bsa;
  }
  sendDec(rnum:number){
    var strnum: string;
    strnum = rnum.toString();
    strnum = strnum.replace(".","p");
    return strnum;
  }
}
