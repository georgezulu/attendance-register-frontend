import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { Student } from '../student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }
   saveStudent(){

     this.registerService.addStudent(this.student).subscribe(data =>{
       console.log(data);
       this.gotToStudentList();
     },
     error => console.log(error));
   }
   gotToStudentList(){
     this.router.navigate(['/students']);
   }

  onSubmit() {
    console.log(this.student);
    this.saveStudent();
  }

}
