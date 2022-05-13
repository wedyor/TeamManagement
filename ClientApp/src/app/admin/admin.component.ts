import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable } from 'rxjs';
import {Users} from '../models/Users'
import { AdminService } from '../services/admin.service';
import { VERSION } from '@angular/core';


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
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    angularVersion = VERSION.full;
    users: any;
  
  constructor(private adminservice: AdminService,
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
}
