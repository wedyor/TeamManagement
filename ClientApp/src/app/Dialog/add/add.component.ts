import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Users } from '../../models/Users.model';
import { AdminService } from '../../services/admin.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  NewUser: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    Role: new FormControl(''),

  });
  constructor(
    private fb: FormBuilder,
    private Adminservice: AdminService,
    public dialog: MatDialog,
    private ref: ChangeDetectorRef
  ) { }
  User: any;
  ngOnInit() {
    this.NewUser = this.fb.group({
      id: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]

    });
    // this.ref.detectChanges();

  }
  async AddNewUser(FormData: any) {
    console.log(FormData.value.id);
    if(FormData.value.role == "Employee"){
      let a = await this.Adminservice.addTimeTable(FormData.value.id);
      console.log('ts MMREGEL');
   }
    this.Adminservice.AddNewUser(FormData.value).subscribe(
      (Response: any) => {
        this.User = Response;
        console.log('this.User.Id',this.User);
      },
      (error: any) => {
        console.log(error);
      }
    );
    console.log(this.NewUser.value);
    this.dialog.closeAll();
    this.refresh();
  }
  refresh() {
    window.location.reload();
  }
}
