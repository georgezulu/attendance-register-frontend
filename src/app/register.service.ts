import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from './Register';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseURL = "http://localhost:8080/";
  
  constructor(private httpClient: HttpClient) {}

  getStudentsList(): Observable<Student[]> {
    
    console.log('Angular fetching data...');
    return this.httpClient.get<Student[]>(`${this.baseURL+'student'}`);
  }
  getRegistersList(): Observable<Register[]> {
    
    console.log('Angular fetching register data...');

    return this.httpClient.get<Register[]>(`${this.baseURL+'getall'}`);
  }
  getRegistersListByTerm(): Observable<Register[]> {
    
    console.log('Angular fetching register data...');

    return this.httpClient.get<Register[]>(`${this.baseURL+'getByTerm'}`);
  }
  createStudent(student: Student): Observable<Object>{

    return this.httpClient.post(`${this.baseURL+'student'}`, student);
  }
    addStudent(student: Student): Observable<any>{

      return this.httpClient.post(`${this.baseURL+'student'}`, student);
  }
    getStudentById(id: number): Observable<Student> {
      
      return this.httpClient.get<Student>(`${this.baseURL+'student'}/${id}`);
    }
    getStudentsByClass(clazz : string): Observable<Student[]> {
      return this.httpClient.get<Student[]>(`${this.baseURL+'student/getByClass'}/${clazz}`);
    }

    updateStudent(id: number, student: Student): Observable<Object> {
      return this.httpClient.put(`${this.baseURL+'student'}/$[id]`, student);
    }
    deleteStudent(id: number): Observable<Object> {
      return this.httpClient.delete(`${this.baseURL+'student'}/$[id]`);
    }
    addRegister(students: Student[]): Observable<any>{
      console.log('............ addRegister' + students);
      return this.httpClient.post(`${this.baseURL+'api/saveallS'}`, students);
  }
}
