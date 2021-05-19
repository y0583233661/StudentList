import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentModel } from '../models/studentModel';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private baseURL = "http://cors-anywhere.herokuapp.com/localhost:52795/api/";
  /* private*/ list: StudentModel[];

  constructor(private httpClient: HttpClient) { 
    this.list = [{
      "ID": 1,
      "Identity": "322339896",
      "FirstName": "Yehudit",
      "LastName": "Gluskinos",
      "BirthDate": new Date(2001,4,24),
      "gender": 2,
      "JoinDate":new Date(2021,5,18)
    },
    {
      "ID": 2,
      "Identity": "123456789",
      "FirstName": "Tamar",
      "LastName": "Gluskinos",
      "BirthDate": new Date(2003,4,18),
      "gender": 2,
      "JoinDate": new Date(2021,5,18)
    },
    {
      "ID": 3,
      "Identity": "123654789",
      "FirstName": "Malka",
      "LastName": "Gluskinos",
      "BirthDate": new Date(2005,7,24),
      "gender": 2,
      "JoinDate": new Date(2021,5,18)
    }]
  }
  get(controller) {
    var obs = this.httpClient.get(this.baseURL + controller);
    obs.subscribe(
      res => console.log(res),
      err =>{
        console.error(err);
        alert("there was an error :( "); 
      }   
    );
    return obs;
  }
  getStudent(controller){
    let obs = this.get("student" + controller)
    obs.subscribe(
       res => this.list = res as StudentModel[]
    )    
    return obs;
  }
  getAll(){
    return this.getStudent("");
  }
  getByName(name:string){
    return this.list.filter(s=> s.FirstName.includes(name) || s.LastName.includes(name));
    //return this.getStudent("/name/" + name);
  }
  getByIdentity(identity: string){
    return this.list.filter(s=> s.Identity.includes(identity));
    //return this.getStudent("/identity/" + identity);
  }
  getById(id:number){
    return this.list.filter(s=> s.ID == id)[0];
  }
  
}
