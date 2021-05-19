import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Gender, StudentModel } from '../models/studentModel';
import { StyleService } from '../services/style.service';

@Component({
  selector: 'app-student-line',
  templateUrl: './student-line.component.html',
  styleUrls: ['./student-line.component.scss']
})
export class StudentLineComponent implements OnInit {

  constructor( private style: StyleService) { }

  @Input() student: StudentModel;
  age:number;
  color: string; 
  ngOnInit(): void {
    this.CalcAge()
    this.color = this.style.color;
  }

  CalcAge(){
    let thisday = new Date();
    let birthDate = new Date(this.student.BirthDate);
    this.age = thisday.getFullYear() - birthDate.getFullYear();
    birthDate.setFullYear(thisday.getFullYear());
    if(thisday < birthDate)
    {
      this.age--;
    }
  }

}
