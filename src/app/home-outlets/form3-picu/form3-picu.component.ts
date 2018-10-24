import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from "app/shared-services/patient.service";
import { IDrugTable } from "../../interfaces/drug-table";
import { Codesheet } from "../codesheet";

@Component({
  selector: 'form3',
  templateUrl: './form3-picu.component.html',
  styleUrls: ['./form3-picu.component.css', '../home-styles.css']
})
export class Form3 extends Codesheet implements OnInit {
  @Input() tableIndex: number = -1;
  async ngOnInit() {
    this.tables = await this.assignTables(3,this.tableIndex);
    if(this.tableIndex == -1){
      this.tableIndex = 0;
    }
  }
}
