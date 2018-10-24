import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from "app/shared-services/patient.service";
import { IDrugTable } from "../../interfaces/drug-table";
import { Codesheet } from "../codesheet";

@Component({
  selector: 'form2',
  templateUrl: './form2-seizure.component.html',
  styleUrls: ['./form2-seizure.component.css', '../home-styles.css']
})
export class Form2 extends Codesheet implements OnInit {
  @Input() tableIndex: number = -1;
  async ngOnInit() {
    this.tables = await this.assignTables(2,this.tableIndex);
    if(this.tableIndex == -1){
      this.tableIndex = 0;
    }
  }
}
