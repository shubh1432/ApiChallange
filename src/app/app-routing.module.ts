import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { DetailsComponent } from './details/details.component';
import { DataDashboardComponent } from './data-dashboard/data-dashboard.component';
import { EdituserComponent } from './edituser/edituser.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {
    path: "" , redirectTo: "home" , pathMatch: 'full'
  },
  {
    path: "home" , component: HomepageComponent
  },
  {
    path: "header" , component: HeaderComponent
  },
  {
    path: "dashboard" , component: DashboardComponent , canActivate: [AuthGuard]
  },
  {
    path: "datadashboard" , component: DataDashboardComponent 
  },
  {
    path: "edit" , component: EdituserComponent
  },
  {
    path: "login" , component: LoginComponent 
  },
  {
    path: "register" , component: RegisterComponent
  },
  {
    path: "details" , component: DetailsComponent 
  }
  // {
  //   path: "**" ,  component: PagenotfoundComponent
  // }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
