import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  
})
export class DetailsComponent implements OnInit {

  courseDetails: any;

  constructor(private userservice: UsersService) { }

  filterText: string = '';

  ngOnInit(): void {
    this.getCourseInfo();
    
    // this.userservice.OnShowDetailsClicked.subscribe((data: any) => {
    //   this.user = data;
    // })
  }


  getCourseInfo() {
    this.userservice.getUserDetails().subscribe(res => {
      this.courseDetails = res;
    })
  }

}
