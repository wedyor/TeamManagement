import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Users } from '../../models/Users.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  DeletedUser: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public User: Users,
    private AdminService: AdminService,
    public dialog: MatDialog,
    private ref: ChangeDetectorRef

  ) { }

  ngOnInit(): void {
    this.AdminService.GetAllUsers();
    
  }
  DeleteUser(User: Users) {
    console.log('user.id',User)
    this.AdminService.DeleteUserById(User.id).subscribe(
      (Response: any) => {
        this.DeleteUser = Response;

      }
    );

    // this.ref.detectChanges();
    this.dialog.closeAll();
    this.refresh();
  }

  refresh() {
    location.reload();
  }
}
