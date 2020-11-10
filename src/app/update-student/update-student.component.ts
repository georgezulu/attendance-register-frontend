import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { Student } from '../student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id: number;
  student: Student = new Student();

  constructor(private registerService: RegisterService, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.registerService.getStudentById(this.id).subscribe(data => {
      this.student = data;
    }, error => console.log(error));
    }
    
    onSubmit() {
      this.registerService.updateStudent(this.id, this.student).subscribe( data => {
        this.gotToStudentList();
      }, error => console.log(error));
    }
    gotToStudentList(){
      this.router.navigate(['/students']);
    }
  }


