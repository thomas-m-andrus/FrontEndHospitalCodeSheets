import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DrugTablesModule} from "./drug-tables/drug-tables.module";
import { DrugTableComponent } from "app/code-sheet-content/drug-tables/drug-table/drug-table.component";
import { CodesheetFrameComponent } from './codesheet-frame/codesheet-frame.component';
import { FooterTemplate1Component } from "app/code-sheet-content/footer/footer-template-1/footer-template-1.component";
import { HeaderTemplate1Component } from "app/code-sheet-content/header/header-template-1/header-template-1.component";

@NgModule({
  imports: [
    CommonModule
    ,DrugTablesModule
  ],
  declarations: [
    CodesheetFrameComponent
    ,FooterTemplate1Component
    ,HeaderTemplate1Component
  ],
  exports: [
   DrugTableComponent
  ,CodesheetFrameComponent
  ,FooterTemplate1Component
  ,HeaderTemplate1Component
  ]
})
export class CodeSheetContentModule { }
