import { Component, OnInit } from '@angular/core';
import { StyleService } from '../services/style.service';

@Component({
  selector: 'app-student-line-header',
  templateUrl: './student-line-header.component.html',
  styleUrls: ['./student-line-header.component.scss']
})
export class StudentLineHeaderComponent implements OnInit {

  constructor( private style: StyleService) { }
  color: string; 
  ngOnInit(): void {
    this.color = this.style.color;
  }

}
