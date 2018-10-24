import { Injectable } from '@angular/core';
import { IDrugTable } from "../interfaces/drug-table";
import { IDrug } from "../interfaces/drug";

@Injectable()
export class DrugService {

  constructor() {}

  ngOnInit(){
  }

  DSTable: IDrugTable[][];

  flToTxt2Dec(conversion: number){
    var flTotxt = conversion.toFixed(2);
    if (flTotxt.endsWith("0")){
      flTotxt = flTotxt.substring(0,(flTotxt.length-1));
      if (flTotxt.endsWith(".0")){
          flTotxt = flTotxt.substring(0,(flTotxt.length-2)); 
      }
    }
    return flTotxt;
  }

}
