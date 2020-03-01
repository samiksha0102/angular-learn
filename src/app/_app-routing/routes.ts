import { Routes } from '@angular/router';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { MenuComponent } from '../menu/menu.component';


export const ROUTES: Routes = [
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'menu',component:MenuComponent}, 
  {path:'dishdetail/:id',component:DishdetailComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];