import { Injectable } from '@angular/core';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getStudents(){
    return [
      new Student(97, "Milka Otieno", 5, "female"),
      new Student(75, "Antony", 3, "male"),
      new Student(63, "Meloni", 7, "queer"),
      new Student(54, "Silvia", 5, "queer")
    ]
  }

  constructor() { }
}
