import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  isLoginSuccess: boolean = true;
  invalidUser: boolean = false;
  invalidUserError : string = "username or password is not valid !"

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private auth: AuthGuard, private user: UsersService) { }


  profile = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })


  ngOnInit(): void {
    
  }

  ngDoCheck(){
    // this.user.loginUserName = this.profile.get('username').value;
    this.user.loginUserNameValue(this.profile.get('username').value);
    console.log(this.profile.get('username').value);
  }


  loginbtn() {
    this.http.get<any>('http://localhost:3000/manager').subscribe(res => {
      const user = res.find((a: any) => {
        return a.username === this.profile.value.username && a.password === this.profile.value.password
      });
      if (user) {
        // alert("Login Successfull !!");
        this.profile.reset();
        this.router.navigate(['dashboard'])
        this.auth.isManagerLogIn = true;
        
      } else {
        this.invalidUser = true;
      }
    })

      this.http.get<any>('http://localhost:3000/users').subscribe(res => {
        const user = res.find((a: any) => {
          return a.username === this.profile.value.username && a.password === this.profile.value.password
        });
        if (user) {
          // alert("Login Successfull !!");
          this.profile.reset();
          this.router.navigate(['datadashboard'])
          this.auth.isUserLogin = true;
        
        } else {
          this.invalidUser = true;
        }
      })
    }


}
