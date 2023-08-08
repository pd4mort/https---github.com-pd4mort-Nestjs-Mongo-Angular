import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data: any[] = [];

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiService.getUser().subscribe(data => {
      this.data = data;
      console.log(this.data)
    });
  }

  openAddUserDialog() {
    const dialogRef = this.dialog.open(AddUserDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
        this.getData();
    });
  }

  editUser(user: any) {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: {
        editMode: true,
        user
      }
    });

    dialogRef.afterClosed().subscribe(result => {
        this.getData();
    });
  }

  deleteUser(user: any) {
    if (confirm(`¿Estás seguro de que quieres borrar a ${user.name}?`)) {
      this.apiService.deleteUser(user._id).subscribe(() => {
        this.getData();
      });
    }
  }
}
