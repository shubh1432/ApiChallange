import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private userservice: UsersService, private auth: AuthGuard , private router: Router) { }

  accessDeniedUser: boolean = false;
  accessDeniedManager: boolean = false;

  ngOnInit(): void {
    this.accessDeniedUser = this.auth.isUserLogin;
    this.accessDeniedManager = this.auth.isManagerLogIn;
  }


  isLoginSuccess : boolean = true;
  
  // ngDoCheck(){
  //    this.isLoginSuccess = this.userservice.isLogin
  // }
  
  onLogout(){
    this.auth.isManagerLogIn = false;
    this.auth.isUserLogin = false;
    this.router.navigate(['/login']);
  }
}
