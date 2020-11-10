import { Component, OnInit } from '@angular/core';
import { Register } from '../Register';
import { RegisterService } from '../register.service';
import { Student } from '../student';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  students : Student[];
  todayDate : Date = new Date();
  register: Register = new Register();
  student: Student = new Student();
  selectedClazz: string = '';
 
  constructor(private registerService: RegisterService) { }

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
  saveRegister(){
    console.log('****************** saveRegister');
    this.registerService.addRegister(this.students).subscribe(data =>{
      console.log(data);
      this.reloadPage();
},
    error => console.log(error));
  }
  
  fetchStudents(students: any) {
    console.log('fetchStudent fetchStudent ' + students[0].name);
    console.log('fetchStudent fetchStudent ' + students[0].present);
    this.students = students;
    this.saveRegister();
  }
  selectChangeHandler (event: any) {
    this.selectedClazz = event.target.value;
    console.log('cccccccccccccccccclass '+ this.selectedClazz)
    this.getStudentsByClass(this.selectedClazz);
   }
   getStudentsByClass(clazz: string) {
    this.registerService.getStudentsByClass(clazz).subscribe( data => {
      console.log(data);
      this.students = data;
      
    });
   }
   reloadPage(): void {
    window.location.reload();
  }
}
