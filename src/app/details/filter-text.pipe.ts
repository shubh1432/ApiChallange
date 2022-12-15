import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTextByStudentName'
})
export class FilterTextPipe implements PipeTransform {

  transform(courseDetails: any, filterText: string): any {

    if(filterText ===""){
     return courseDetails;
    }else{
     return courseDetails.filter((student:any)=> {
     return student.firstname.toLowerCase() === filterText.toLowerCase();
     }) 
     
    }
  }
 
}
