import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  coreStudents:Student[] = []

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.coreStudents = this.studentService.getStudents()
  }

}
