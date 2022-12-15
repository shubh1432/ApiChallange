import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  loginUserName: string = "";
  

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(){
    // console.log(this.loginUserName);
  }
  
  loginUserNameValue(name: string){
    this.loginUserName = name;
    // console.log(name);
    // console.log(this.loginUserName);
  }

  getUserDetails() {
    return this.http.get('http://localhost:3000/users');
    // return this.http.get('/ldlms/v2/sfwd-courses')
  }


  getManagerDetail() {
    return this.http.get('http://localhost:3000/manager');
  }

  updateDetails(id:any , obj:any){
    return this.http.put('http://localhost:3000/users'+id , obj);
  }


  deleteRecordDetail(userId:any){
    return this.http.delete('http://localhost:3000/users'+ userId)
  }

 

  // OnShowDetailsClicked = new EventEmitter<any>();
  // ShowUserDetails(user:any) {
  //   this.OnShowDetailsClicked.emit(user);
  // }
}
