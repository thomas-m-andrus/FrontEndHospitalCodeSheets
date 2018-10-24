import{ Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "app/home-outlets/welcome/welcome.component";
import { TestComponent } from "app/testing/test/test.component";
import { Form1 } from "app/home-outlets/form1-anaphylatic9w/form1-anaphylatic9w.component";
import { Form2 } from "app/home-outlets/form2-seizure/form2-seizure.component";
import { Form3 } from "app/home-outlets/form3-picu/form3-picu.component";
import { Form4 } from "app/home-outlets/form4-nicu/form4-nicu.component";
import { Form5 } from "app/home-outlets/form5-or/form5-or.component";

export const HOME_OUTLET_ROUTES: Routes = [
//Directs user to the welcome page
    {path:'', redirectTo: 'Welcome', pathMatch: 'full'}
    ,{path:'Welcome', component: WelcomeComponent}
//The following are the redirect to the Codesheets
    ,{path: '1', redirectTo:'Anaphylactic'}
    ,{path: '2',redirectTo:'Seizure'}
    ,{path: '3',redirectTo:'PICU'}
    ,{path: '4',redirectTo:'NICU'}
    ,{path: '5',redirectTo:'OR'}
//The following are the paths to the Codesheets
    ,{path: 'Anaphylactic', component: Form1}
    ,{path: 'Seizure', component: Form2}
    ,{path: 'PICU', component: Form3}
    ,{path: 'NICU', component: Form4}
    ,{path: 'OR', component: Form5}
//path for test remove when finished dev
    ,{path:'Test', component: TestComponent}
];