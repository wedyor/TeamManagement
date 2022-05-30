import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ResponsableService } from '../services/responsable.service';
@Component({
  selector: 'app-time-table',
  templateUrl: './timeTable.component.html',
  styleUrls: ['./timetable.component.css'],
})
export class TimeTableComponent implements OnInit {
  c: any;
  role : any;
  timeTable: any;
  timeForm: any;
  EmployeId: any;
  constructor(private ResponsableService: ResponsableService) {}

  async ngOnInit() {
    this.role = localStorage.getItem("role");
    console.log(this.role);
    this.timeForm = new FormGroup({
      time: new FormControl(null, { validators: [] }),
      days: new FormControl(null, { validators: [] }),
      departure: new FormControl(null, { validators: [] }),
      destination: new FormControl(null, { validators: [] }),
      vehicule: new FormControl(null, { validators: [] }),
      partner: new FormControl(null, { validators: [] }),
    });
    if(this.role == "Employee"){
       let a = localStorage.getItem('userId');
       this.timeTable = await this.ResponsableService.gettimeTable(a);
    console.log(this.timeTable[0].time);
    this.timeForm.setValue({
      time: this.timeTable[0].time,
      days: this.timeTable[0].days,
      departure: this.timeTable[0].departure,
      destination: this.timeTable[0].destination,
      vehicule: this.timeTable[0].vehicule,
      partner: this.timeTable[0].partner,
    });
    }
    this.c = await this.ResponsableService.getEmploye();
    console.log(this.c);
  }

  async viewUser(id: any) {
    this.EmployeId = id.value;
    this.timeTable = await this.ResponsableService.gettimeTable(id.value);
    console.log(id.value);
    console.log(this.timeTable[0].time);
    this.timeForm.setValue({
      time: this.timeTable[0].time,
      days: this.timeTable[0].days,
      departure: this.timeTable[0].departure,
      destination: this.timeTable[0].destination,
      vehicule: this.timeTable[0].vehicule,
      partner: this.timeTable[0].partner,
    });
  }

 async  SaveTable(form: NgForm) {
    console.log(this.EmployeId);
    console.log(this.timeForm.value.time);
    await this.ResponsableService.UpdateTimeTable(
      this.EmployeId,
      this.timeForm.value.time,
      this.timeForm.value.days,
      this.timeForm.value.departure,
      this.timeForm.value.destination,
      this.timeForm.value.vehicule,
      this.timeForm.value.partner
    );
  }
}
