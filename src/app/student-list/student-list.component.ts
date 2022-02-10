import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  coreStudents:Student[] = []
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.coreStudents = this.studentService.getStudents()
  }

}
