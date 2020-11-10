import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuarterlyReportComponent } from './quarterly-report/quarterly-report.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [{path: 'students', component: StudentListComponent},
{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'login', component : LoginComponent},
{path: 'create-student', component: CreateStudentComponent},
{path: 'daily-report', component: DailyReportComponent},
{path: 'quarterly-report', component: QuarterlyReportComponent},
{path: 'home', component: HomeComponent},
{path: 'attendance', component: AttendanceComponent},
{path: 'student-details/:id', component: StudentDetailsComponent},
{path: 'update-student/:id', component: UpdateStudentComponent},
];      

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
