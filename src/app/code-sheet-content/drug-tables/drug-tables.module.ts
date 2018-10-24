import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugTableComponent } from './drug-table/drug-table.component';
import { TableTemplate1Component } from './table-templates/table-template-1/table-template-1.component';
import { TableTemplate2Component } from './table-templates/table-template-2/table-template-2.component';
import { TableTemplate3Component } from './table-templates/table-template-3/table-template-3.component';
import { TableTemplate4Component } from './table-templates/table-template-4/table-template-4.component';
import { TableTemplate5Component } from './table-templates/table-template-5/table-template-5.component';
import { TableTemplate6Component } from './table-templates/table-template-6/table-template-6.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DrugTableComponent, 
    TableTemplate1Component, 
    TableTemplate2Component, 
    TableTemplate3Component, 
    TableTemplate4Component, 
    TableTemplate5Component, 
    TableTemplate6Component
    ],
  exports: [
    DrugTableComponent
  ]

})
export class DrugTablesModule { }
