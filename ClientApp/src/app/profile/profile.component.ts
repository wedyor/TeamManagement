import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 user : any;
  constructor(private EmployeeService: EmployeeService) { }

  async ngOnInit() {
    this.user = await this.EmployeeService.getUser();
     console.log(this.user)
  }

}
