import { Component, OnInit, Input} from '@angular/core';
import { DrugService } from "app/shared-services/drug.service";
import { TableTemplate1Component } from '../table-templates/table-template-1/table-template-1.component';
import { TableTemplate2Component } from '../table-templates/table-template-2/table-template-2.component';
import { TableTemplate3Component } from '../table-templates/table-template-3/table-template-3.component';
import { TableTemplate4Component } from '../table-templates/table-template-4/table-template-4.component';
import { TableTemplate5Component } from '../table-templates/table-template-5/table-template-5.component';
import { TableTemplate6Component } from '../table-templates/table-template-6/table-template-6.component';
import { IDrugTable } from "../../../interfaces/drug-table";

@Component({
  selector: 'drug-table',
  templateUrl: './drug-table.component.html',
  styleUrls: ['./drug-table.component.css']
})
export class DrugTableComponent {

  @Input() public table: IDrugTable;

}
