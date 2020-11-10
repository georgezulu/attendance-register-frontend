import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { Student } from '../student'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students : Student[];

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
   this.getStudents();
  }
  private getStudents() {
 
    console.log('data');
    this.registerService.getStudentsList().subscribe(data => {
      console.log(data);
      this.students = data;
    });
  }
    studentDetails(id: number) {
      this.router.navigate(['student-details', id]);
    }
    updateStudent(id: number){
    this.router.navigate(['update-student', id]);
  }
  deleteStudent(id: number){

    this.registerService.deleteStudent(id).subscribe( data => {
      console.log(data);
      this.getStudents();
    })
  }

}
