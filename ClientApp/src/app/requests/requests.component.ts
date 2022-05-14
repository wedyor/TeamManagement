import { Component, OnInit } from '@angular/core';
import { request } from '../models/request.model';
import { EmployeeService } from '../services/employee.service';
import { ResponsableService } from '../services/responsable.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  a: any;
  b: any;
  role : any;
  displayedColumns: string[] = ['id'];

  constructor(private EmployeeService:EmployeeService, private ResponsableService:ResponsableService ) { }

  ngOnInit(): void {

   this.role = localStorage.getItem('role');
   if(this.role == 'Responsable'){
    this.getRequests();
     this.displayedColumns.push('Employe','Description', 'Type', 'Status','Date','Accept');
    
  
   }else if (this.role =='Employee'){
      this.getEmployeReq();
      this.displayedColumns.push('Description', 'Type', 'Status','Date');
   }
  }

  async getRequests() {
    this.a = await this.EmployeeService.getRequest();
     console.log(this.a);
    }

    accept(req:request){
      console.log(req);
      req.status = 'accepted' ;
      this.ResponsableService.acceptReq(req);
    }

    refuse(req:request){
      console.log(req);
      req.status = 'refused' ;
      this.ResponsableService.refuseReq(req);
    }

async    getEmployeReq(){
      this.a = await this.EmployeeService.getEmployeReq();
    }

}
