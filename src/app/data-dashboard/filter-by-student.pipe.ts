import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByStudent'

})
export class FilterByStudentPipe implements PipeTransform {

  transform(courseDetails: any, filterByUserName: string): any {

    if(filterByUserName === ""){
     return courseDetails;
    }else{
     return courseDetails.filter((student:any)=> {
     return student.firstname.toLowerCase() === filterByUserName.toLowerCase();
     }) 
     
    }
  }

}
