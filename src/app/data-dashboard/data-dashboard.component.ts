import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-data-dashboard',
  templateUrl: './data-dashboard.component.html',
  styleUrls: ['./data-dashboard.component.scss']
})
export class DataDashboardComponent implements OnInit {

  courseDetails: any;
  filterByUserName: string = "";

  constructor(private userservice: UsersService) { }

  ngOnInit(): void {
    this.getCourseInfo();
  }

  ngDoCheck(){
    this.filterByUserName = this.userservice.loginUserName;
  }

  getCourseInfo() {
    this.userservice.getUserDetails().subscribe(res => {
      this.courseDetails = res;
    })
  }

}
