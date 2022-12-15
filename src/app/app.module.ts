import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { DataDashboardComponent } from './data-dashboard/data-dashboard.component';
import { UsersService } from './Services/users.service';
import { EdituserComponent } from './edituser/edituser.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FilterTextPipe } from './details/filter-text.pipe';
import { FilterByStudentPipe } from './data-dashboard/filter-by-student.pipe';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    DetailsComponent,
    DataDashboardComponent,
    EdituserComponent,
    HomepageComponent,
    FilterTextPipe,
    FilterByStudentPipe,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard , UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
