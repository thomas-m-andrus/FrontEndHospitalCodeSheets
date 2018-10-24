import { Component, OnInit, Input } from '@angular/core';
import { DrugService } from "app/shared-services/drug.service";
import { IDrugTable } from "../../../../interfaces/drug-table";

@Component({
  selector: 'table-6',
  templateUrl: './table-template-6.component.html',
  styleUrls: ['./table-template-6.component.css']
})
export class TableTemplate6Component implements OnInit {
  @Input() public table: IDrugTable;

  constructor(public ds: DrugService) { }

  ngOnInit() {
  }
}
