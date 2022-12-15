import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {

  courseDetails: any;
  isLoginSuccess: boolean = true;
  accessDeniedUser: boolean = false;
  accessDeniedManager: boolean = false;
  

  constructor(private http: HttpClient, private router: Router, private userservice: UsersService, private auth: AuthGuard) { }

  profile = new FormGroup({
    firstname: new FormControl(''),
    courses: new FormControl(
      {
        "harwellInduction": new FormControl(''),
        "businessContinuity": new FormControl(''),
        "animaltech": new FormControl(''),
        "mobiledevice": new FormControl(''),
        "michrobiology": new FormControl('')
      }
    )
  })



  ngOnInit(): void {
    this.getDetails();
    this.accessDeniedUser = this.auth.isUserLogin;
    this.accessDeniedManager = this.auth.isManagerLogIn;
    
  }


  getDetails() {
    this.userservice.getUserDetails().subscribe(res => {
      console.log(res);
      this.courseDetails = res;
    })
  }


  update() {
    this.http.post('http://localhost:3000/users', this.profile.value).subscribe(res => {
      console.log(res);
      alert("Data Updated Successfull");
      this.profile.reset();
      this.router.navigate(['details']);
    })
  }



}
