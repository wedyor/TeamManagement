import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent implements OnInit {
  a: any;
  displayedColumns: string[] = ['id', 'name', 'type', 'status','date'];
  constructor(
    private breakpointObserver: BreakpointObserver,
    private EmployeesService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.getRequests();
  }

 getRequests() {
  this.EmployeesService.getRequest();
   /*  this.a = [{
      id: b[0].id,
      name: b[0].name,
      type: b[0].type,
      status: b[0].status,
      date: b[0].date,
    }]; */



    ///console.log(this.a);
   return this.a;
  }
}
