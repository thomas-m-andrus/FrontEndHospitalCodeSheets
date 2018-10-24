import { Routes, RouterModule} from "@angular/router";
import { HomeComponent } from "app/home/home.component";
import { HOME_OUTLET_ROUTES } from "app/home-outlets/home-outlets.routes";
import { RedirectComponent } from "app/home/redirect.component";

const APP_ROUTES: Routes = [
    {path:'', redirectTo: '/CodeSheet', pathMatch:'full'},
    {path:'CodeSheet', component: RedirectComponent, pathMatch:'full'},
    {
        path:'CodeSheet/:FName/:LName/:Weight/:Height/:MM/:DD/:YYYY'
        ,component: HomeComponent
        ,children: HOME_OUTLET_ROUTES
    },
    {path:'CodeSheet/:FName/:LName/:Weight/:Height/:MM/:DD/:YYYY', component: HomeComponent}    
];

export const routing = RouterModule.forRoot(APP_ROUTES);