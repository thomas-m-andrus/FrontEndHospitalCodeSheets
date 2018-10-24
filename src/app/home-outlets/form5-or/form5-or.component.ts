import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from "app/shared-services/patient.service";
import { IDrugTable } from "../../interfaces/drug-table";
import { Codesheet } from "../codesheet";

@Component({
  selector: 'form5',
  templateUrl: './form5-or.component.html',
  styleUrls: ['./form5-or.component.css', '../home-styles.css']
})
export class Form5 extends Codesheet implements OnInit {
  @Input() tableIndex: number = -1;
  async ngOnInit() {
    this.tables = await this.assignTables(5,this.tableIndex);
    if(this.tableIndex == -1){
      this.tableIndex = 0;
    }
  }
}
