import { Component, OnInit, Input} from '@angular/core';
import { DrugService } from "app/shared-services/drug.service";
import { IDrugTable } from "../../../../interfaces/drug-table";


//Tempate for Protocal Table (multi-step-dose table)
@Component({
  selector: 'table-3',
  templateUrl: './table-template-3.component.html',
  styleUrls: ['./table-template-3.component.css']
})
export class TableTemplate3Component implements OnInit {
  @Input() public table: IDrugTable;

  constructor(public ds: DrugService) { }

  ngOnInit() {
  }

}
