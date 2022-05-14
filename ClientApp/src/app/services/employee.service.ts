import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { request } from '../models/request.model';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  b: any;
  user : any;
  fileType: any;
  c : request = {
    employe: "1",
    id: "1",
    description: "String",
    type: "String",
    status: "String",
    date: "String"
  } ;
  constructor(private http: HttpClient) {}

 async getRequest() {
  this.b = await this.http.get('http://localhost:3000/requests').toPromise();
  console.log(this.b);
  /*this.c = {
    employeId: "1",
    id: "1",
    name: "String",
    type: "String",
    status: "String",
    date: "String"
  } */
  return this.b;
  }

  async getEmployeReq(){
    let name = localStorage.getItem('name');
    this.b = await this.http.get('http://localhost:3000/requests?employe='+name).toPromise();
    console.log(this.b);
    return this.b;
  }


 async PostReq(description:string, type:string){
       console.log(type,description);
    switch (type){
       case "1" :{
         this.fileType = "Fiche de paix" ;
         break;
       }
       case '2' :{
        this.fileType = "Fiche de presence" ;
        break;
      }
      case '3':{
        this.fileType = "Congé" ;
        break;
      }
    }
    let a = localStorage.getItem('name');
    console.log(a);
  let now = new Date();
    let req = {
      employe: a,
      id: 1,
      description: description,
      type: this.fileType,
      status: "pending",
      date: now.toLocaleDateString()
    };

console.log(req);
await this.http.post('http://localhost:3000/requests',req).toPromise();

  }
 async getUser(){
  let userId = localStorage.getItem('userId');
  this.user = await this.http.get('http://localhost:3000/users?id='+userId).toPromise();
  return this.user;
}

}
