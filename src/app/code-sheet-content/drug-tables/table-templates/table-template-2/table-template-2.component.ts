import { Component, OnInit, Input } from '@angular/core';
import { DrugService } from "app/shared-services/drug.service";
import { IDrugTable } from "../../../../interfaces/drug-table";


//Template for Rate Table
@Component({
  selector: 'table-2',
  templateUrl: './table-template-2.component.html',
  styleUrls: ['./table-template-2.component.css', '../drug-table.css']
})
export class TableTemplate2Component implements OnInit {
  @Input() public table: IDrugTable;

  constructor(public ds: DrugService) { }

  ngOnInit() {
  }

}
