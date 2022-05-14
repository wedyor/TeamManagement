import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Users } from '../../models/Users.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  user :any; 
  UpdateUser: any;
  NewUser: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),

  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public User: Users,
    private fb: FormBuilder,
    private AdminService: AdminService,
    public dialog: MatDialog,
    private ref: ChangeDetectorRef

  ) { }

  ngOnInit(): void {
    this.AdminService.GetAllUsers;
    this.AdminService.GetUserById(this.User.id).subscribe(
      (result: any) => {
        this.user = result;
        this.user.id = result.id;
        // this.ref.detectChanges();
        console.log(this.user);
      }
    );
    this.UpdateUser = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],

    });
    this.UpdateUser.patchValue(this.User);
  }
  EditUser(FormData: any) {

    this.AdminService.EditUserById(
      this.user.id,
      FormData.value
    ).subscribe((UpdatedUser) => {
      console.log(UpdatedUser);
      // this.ref.detectChanges();

    });
    this.dialog.closeAll();
    this.refresh();
  }
  refresh() {
    window.location.reload();
  }

}
