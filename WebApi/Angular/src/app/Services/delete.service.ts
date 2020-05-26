import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private dialog:MatDialog) { }

  openConfirmDialog()
  {
   return this.dialog.open(DeleteConfirmComponent,{
      width: '400px',
      panelClass:'confirm-dialog-container',
      disableClose:true
    });
  }
}
