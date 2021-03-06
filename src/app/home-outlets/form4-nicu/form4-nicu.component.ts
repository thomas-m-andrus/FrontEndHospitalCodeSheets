import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from "app/shared-services/patient.service";
import { IDrugTable } from "../../interfaces/drug-table";
import { Codesheet } from "../codesheet";

@Component({
  selector: 'form4',
  templateUrl: './form4-nicu.component.html',
  styleUrls: ['./form4-nicu.component.css', '../home-styles.css']
})
export class Form4 extends Codesheet implements OnInit {
  @Input() tableIndex: number = -1;
  async ngOnInit() {
    this.tables = await this.assignTables(4,this.tableIndex);
    if(this.tableIndex == -1){
      this.tableIndex = 0;
    }
  }
}