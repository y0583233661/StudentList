import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentModel } from '../models/studentModel';
import { ServerService } from '../services/server-service.service';
import { StyleService } from '../services/style.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private server: ServerService, private route: ActivatedRoute, private style: StyleService) { }

  student: StudentModel;
  color: string;

  ngOnInit(): void {
    this.color = this.style.color;
    this.route.params.subscribe(p => {
      this.student = this.server.getById(p.studentId)
    });
  }

}
