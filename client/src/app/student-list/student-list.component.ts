import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../models/studentModel';
import { ServerService } from '../services/server-service.service';
import { StyleService } from '../services/style.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor(private server: ServerService, private style: StyleService) { }

  studentList: StudentModel[];
  color: string; 

  ngOnInit(): void {
    this.studentList = this.server.list;
    this.color = this.style.color;
    // this.server.getAll().subscribe(
    //   res => this.studentList = res as StudentModel[]
    // )    
  }

  getByName(name, input){
    this.studentList = this.server.getByName(name);//.subscribe(
    //   res => this.studentList = res as StudentModel[]
    // )
    input.value = "";
  }
  getByIdentity(identity, input){
    this.studentList = this.server.getByIdentity(identity);//.subscribe(
    //   res => this.studentList = res as StudentModel[]
    // ) 
    input.value = "";
  }
}
