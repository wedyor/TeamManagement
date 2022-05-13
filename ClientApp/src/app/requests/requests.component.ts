import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  a: any;
  b: any;
  displayedColumns: string[] = ['id','employe' ,'description', 'type', 'status','date'];

  constructor(private EmployeeService:EmployeeService ) { }

  ngOnInit(): void {
   this.getRequests();
  }
  async getRequests() {
    this.a = await this.EmployeeService.getRequest();
   //console.log(this.a);

    }
}
