import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { CodeSheetContentModule } from "app/code-sheet-content/code-sheet-content.module";
//import { FooterModule } from "app/code-sheet-content/footer/footer.module";
//import { HeaderModule } from "app/code-sheet-content/header/header.module";
//import { HttpService } from "app/shared-services/http.service";
//Codesheets
import { HomeOutletsModule } from "app/home-outlets/home-outlets.module";



@NgModule({
  imports: [
    CommonModule,
    CodeSheetContentModule,
    HomeOutletsModule
  ],
  declarations: [TestComponent],
  exports:[TestComponent],
  providers:[]
})
export class TestingModule { }
