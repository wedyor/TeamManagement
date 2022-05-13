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
  let now = new Date();
    let req = {
      employe: "1",
      id: 19,
      description: description,
      type: this.fileType,
      status: "pending",
      date: now.toLocaleDateString()
    };


await this.http.post('http://localhost:3000/requests',req).toPromise();

  }


}
