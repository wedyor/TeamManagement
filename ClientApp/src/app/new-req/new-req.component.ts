import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm,} from "@angular/forms";
import { EmployeeService } from '../services/employee.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-req',
  templateUrl: './new-req.component.html',
  styleUrls: ['./new-req.component.css']
})
export class NewReqComponent implements OnInit {
  form : any;
  type :any;
  constructor(private EmployeeService:EmployeeService,   private router: Router,) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      description : new FormControl(null, { validators: [] })
    });
  }


  sendReq(form : NgForm){
       let a = this.form.value.description;
       this.EmployeeService.PostReq(a,this.type);
       this.router.navigate(['requests'])
  }
  file(name :any){
    this.type = name.value;
  }
}
