import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
 b : any;
  constructor(private http: HttpClient) { }

  async acceptReq(req:request){
    console.log(req);
    await this.http.put('http://localhost:3000/requests/'+req.id,req).toPromise();
  }


  async refuseReq(req:request){
    console.log(req);
    await this.http.put('http://localhost:3000/requests/'+req.id,req).toPromise();
  }

  async getEmploye() {
    this.b = await this.http.get('http://localhost:3000/users?role='+"Employee").toPromise();
    //console.log(this.b);
    return this.b;
    }

    async gettimeTable(id :any) {
      this.b = await this.http.get('http://localhost:3000/timeTable?id='+id).toPromise();
      //console.log(this.b);
      return this.b;
      }
 async UpdateTimeTable(id:any,time: string,days: string, departure: string,destination: string, vehicule: string, partner: string){
     let timeTable = {
        id : id,
        time : time,
        days : days,
        departure : departure,
        destination : destination,
        vehicule :  vehicule,
        partner : partner
     }
     //console.log(timeTable);
     let a = await this.http.put('http://localhost:3000/timeTable/'+id, timeTable).toPromise();
     window.location.reload();
  }
}
