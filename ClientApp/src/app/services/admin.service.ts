import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable, } from '@angular/core';
import { FormGroup, NgModel } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Users} from '../models/Users.model'
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  URL: string = 'http://localhost:3000/users';
  id: number = 0;
  constructor(private http: HttpClient){ }

  public GetAllUsers(): Observable<any> {
    return this.http.get(this.URL);
  }
  public GetUserById(id: number): Observable<Users> {
    return this.http.get<Users>(this.URL + "/" + id);
  }




  public  AddNewUser(Form: Users): Observable<any> {

    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(Form);
    console.log(body);
    console.log(Form.role);

    return this.http.post(this.URL, body, { 'headers': headers });
  }


 async addTimeTable(id: any){
  const headers = { 'content-type': 'application/json' };
  console.log(id);
  let timeTable = {   // adding standard timing for new user
    id : id,   //must be the same id as the employee id
    time : "8 AM - 17 PM",
    days : "Monday - Friday",
    departure : "Tunis",
    destination : "Monastir",
    vehicule :  "Vehicule 2",
    partner : "worker 1"
 };
 console.log(timeTable);
 let a = JSON.stringify(timeTable);
let b = await this.http.post('http://localhost:3000/timeTable',a,{ 'headers': headers }).toPromise();
 return b;
}



  public DeleteUserById(idD: number): Observable<any> {
    this.id = idD;
    return this.http.delete('//localhost:3000/users/'+this.id)
  }




  public EditUserById(id: number, UpdatUserForm: Users): Observable<Users> {
    this.id = id;
    const body = JSON.stringify(UpdatUserForm);
    const headers = { 'content-type': 'application/json' }

    return this.http.put<Users>(this.URL + '/'+ this.id, body, { 'headers': headers });
  }

}
