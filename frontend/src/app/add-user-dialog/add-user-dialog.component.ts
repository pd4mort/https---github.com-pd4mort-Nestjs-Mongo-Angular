import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent {

  // Propiedades para almacenar los valores del formulario
  name: string = '';
  username: string = '';
  password: string = '';

  constructor(
    public dialogRef: MatDialogRef<AddUserDialogComponent>,
    private apiService: ApiService
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  saveUser(): void {

    this.apiService.addUser(this.name, this.username, this.password).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
