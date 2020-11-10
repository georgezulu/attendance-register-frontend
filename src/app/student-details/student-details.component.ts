import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from '../register.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  id: number
  student: Student
  constructor(private route: ActivatedRoute, private registerService: RegisterService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.student = new Student();
    this.registerService.getStudentById(this.id).subscribe( data => {
      this.student = data;
    });
  }

}
