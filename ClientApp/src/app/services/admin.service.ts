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




  public AddNewUser(Form: Users): Observable<any> {

    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(Form);
    return this.http.post(this.URL, body, { 'headers': headers });
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
