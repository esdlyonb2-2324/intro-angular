import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AutrepageComponent} from "./autrepage/autrepage.component";
import {JokesPageComponent} from "./jokes-page/jokes-page.component";

export const routes: Routes = [
  {
    path:'', redirectTo:"/home", pathMatch : "full"
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'autre', component: AutrepageComponent
  },
  {
    path:'jokes', component:JokesPageComponent
  }

];
