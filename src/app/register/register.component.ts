import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  isLoginSuccess : boolean = true;
  constructor(private http: HttpClient , private router: Router) { }

  profile = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    company: new FormControl('' , Validators.required)
  })


  ngOnInit(): void {
  }

  submitform() {

    this.profile.markAllAsTouched()
    if (this.profile.valid) {

      this.http.post('http://localhost:3000/users', this.profile.value).subscribe( (res) => {
        console.log(res);
        alert("Registration Successfull");
        this.profile.reset(); 
        this.router.navigate(['login']);
      })

      // console.log("Firstname :- " + this.profile.value.firstname)

    } else {
      console.log("Enter the required fields")
    }

  }



  reset(){
    return this.profile.reset();
  }

}
