import { Component, OnInit, Input} from '@angular/core';
import { DrugService } from "app/shared-services/drug.service";
import { IDrugTable } from "../../../../interfaces/drug-table";


//Template for Joule Table
@Component({
  selector: 'table-5',
  templateUrl: './table-template-5.component.html',
  styleUrls: ['./table-template-5.component.css']
})
export class TableTemplate5Component implements OnInit {
  @Input() public table: IDrugTable;

  constructor(public ds: DrugService) { }

  ngOnInit() {}
  displayTopBoarder(){
    var ret = true;
    var pos = [4,5];
    /*if (this.index>0){
      if(pos.indexOf(this.ds.DSTable[this.index].IDTType)>-1){
        ret = false;
      }
    }*/
    return ret;
  }
}
