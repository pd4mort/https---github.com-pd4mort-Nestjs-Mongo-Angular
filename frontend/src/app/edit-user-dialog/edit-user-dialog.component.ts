import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent {

  id: string = '';
  name: string = '';
  username: string = '';
  password: string = '';

  constructor(
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    const { _id, name, username, password } = data.user; // Destructure user object
    this.id = _id;
    this.name = name;
    this.username = username;
    this.password = password;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  saveUser(): void {
    this.apiService.editUser(this.id, this.name, this.username, this.password).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
