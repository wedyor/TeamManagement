import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable } from 'rxjs';
import {Users} from '../models/Users.model'
import { AdminService } from '../services/admin.service';
import { VERSION } from '@angular/core';
import { DeleteComponent } from '../Dialog/delete/delete.component';
import { EditComponent } from '../Dialog/edit/edit.component';
import { AddComponent } from '../Dialog/add/add.component';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  DataSource: MatTableDataSource<any> = new MatTableDataSource<any>(

    );
    resultsLength: number = 0;
    RefreshUsers = new BehaviorSubject<boolean>(true)
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    angularVersion = VERSION.full;
    users: any;
  
  constructor(private adminservice: AdminService, private authservice: AuthService,
    private dialog: MatDialog,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.GetAllUsers();
  }
  GetAllUsers() {
    this.adminservice.GetAllUsers().subscribe(
      (Users: any) => {
        this.DataSource.data = Users;
        this.users = this.DataSource.connect();
        console.log(this.users);
        this.DataSource.paginator = this.paginator;
        this.resultsLength = this.DataSource.data.length;
        // this.ref.detectChanges();
        console.log(this.users);


      },
      (error: any) => {
        console.log('Error (GetAllData) :: ' + error);
      }
    );

  }

  AddNewUser() {
    this.dialog.open(AddComponent, {
      maxHeight: '90vh'
    });

    // this.ref.detectChanges();

  }
  DeleteUser(User: Users) {
    this.dialog.open(DeleteComponent, {
      
      data: {
        id: User.id,
        firstname: User.firstname,
        lastname: User.lastname,
        email: User.email,
        password: User.password,
        role: User.role,

      },
    });
    // this.ref.detectChanges();

  }
  EditUser(User: Users) {
    this.dialog.open(EditComponent, {
      data: {
        id: User.id,
        firstname: User.firstname,
        lastname: User.lastname,
        email: User.email,
        password: User.password,
        role: User.role,

      },
      maxHeight: '90vh'
    });
    // this.ref.detectChanges();

    console.log(User.id + ' From parent component');
  }
  onlogout(){
    this.authservice.logout();
  }
  
}
