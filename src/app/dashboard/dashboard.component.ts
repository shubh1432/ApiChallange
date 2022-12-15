import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isLoginSuccess : boolean = true;
  userCredentials: any;
  user: Object;

  constructor(private http: HttpClient, private userservice: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.getUserInfo();
  }


  getUserInfo() {
    this.userservice.getUserDetails().subscribe(res => {
      console.log(res);
      this.userCredentials = res;
    })
  }
  // getUserInfo(){
  //   this.userservice.getUserDetails().subscribe( 
  //     {
  //       next(res){
  //         console.log(res);
  //       },
  //       error(err){
  //         console.log('Error Occured :' +err.message)
  //       }
  //     }
  //   )
  // }

   getData(){
    this.userservice.getUserDetails().subscribe(res =>{
      console.log(res);
    })
   } 


   onDelete(id:any){
          this.http.delete('http://localhost:3000/users/'+id).subscribe(res =>{
            alert("Record Deleted Succeffully !!!")
            this.getUserInfo();
          })
     }
   
   
  // showDetail(user: any) {
  //   this.userservice.getUserDetails(user);
  //   this.router.navigate(['details']);
  // }

}
