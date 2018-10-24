import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSheetContentModule } from "app/code-sheet-content/code-sheet-content.module";
import { WelcomeComponent } from './welcome/welcome.component';
import { Form1 } from './form1-anaphylatic9w/form1-anaphylatic9w.component';
import { Form2 } from './form2-seizure/form2-seizure.component';
import { Form3 } from './form3-picu/form3-picu.component';
import { Form4 } from './form4-nicu/form4-nicu.component';
import { Form5 } from './form5-or/form5-or.component';

@NgModule({
  imports: [
    CommonModule
    ,CodeSheetContentModule
  ],
  declarations: [
    WelcomeComponent
    ,Form1
    ,Form2
    ,Form3
    ,Form4
    ,Form5
  ],
  exports:[
    Form1
    ,Form2
    ,Form3
    ,Form4
    ,Form5
  ]
})
export class HomeOutletsModule { }
