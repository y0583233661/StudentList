import { Component, OnInit } from '@angular/core';
import { StyleService } from '../services/style.service';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss']
})
export class ConfigurationsComponent implements OnInit {

  constructor(private style: StyleService){}
  
  changeColor(color: string){
    if(color){
      this.style.color = color;
    }
  }
  ngOnInit(): void {
  }

}
