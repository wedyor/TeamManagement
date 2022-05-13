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
  Id: number = 0;
  constructor(private http: HttpClient){ }

  public GetAllUsers(): Observable<any> {
    return this.http.get(this.URL);
  }
  public GetUserById(Id: number): Observable<Users> {
    return this.http.get<Users>(this.URL + "/" + Id);
  }
  public AddNewUser(Form: Users): Observable<any> {

    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(Form);
    return this.http.post(this.URL, body, { 'headers': headers });
  }
  public DeleteUserById(idD: number): Observable<any> {
    this.Id = idD;
    return this.http.delete(this.URL + '/' + `${this.Id}`)
  }
  public EditUserById(Id: number, UpdatUserForm: Users): Observable<Users> {
    const body = JSON.stringify(UpdatUserForm);
    const headers = { 'content-type': 'application/json' }

    return this.http.put<Users>(this.URL + '/' + `${Id}`, body, { 'headers': headers });
  }

}
