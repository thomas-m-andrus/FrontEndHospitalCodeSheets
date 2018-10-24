import { Component, OnInit, Input} from '@angular/core';
import { DrugService } from "app/shared-services/drug.service";
import { IDrugTable } from "../../../../interfaces/drug-table";


//Template for Dosage Table
@Component({
  selector: 'table-1',
  templateUrl: './table-template-1.component.html',
  styleUrls: ['./table-template-1.component.css', '../drug-table.css']
})
export class TableTemplate1Component implements OnInit {

  @Input() public table: IDrugTable;

  constructor(public ds: DrugService) { }

  ngOnInit() {
  }

  isNULL(item){
    if (item == null){
      return true;
    } else {
      return false;
    }
  }
}
