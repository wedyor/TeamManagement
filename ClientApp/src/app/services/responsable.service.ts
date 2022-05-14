import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  constructor(private http: HttpClient) { }

  async acceptReq(req:request){
    console.log(req);
    await this.http.put('http://localhost:3000/requests/'+req.id,req).toPromise();
  }

 
  async refuseReq(req:request){
    console.log(req);
    await this.http.put('http://localhost:3000/requests/'+req.id,req).toPromise();
  }
}
