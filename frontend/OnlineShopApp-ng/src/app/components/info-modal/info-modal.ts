import { Component, inject, input } from '@angular/core';
import { MatDialog, MatDialogContent, MatDialogActions, MatDialogRef, MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { MatAnchor } from "@angular/material/button";
import { RouterOutlet,RouterLink } from "@angular/router";


@Component({
  selector: 'info-modal',
  imports: [MatDialogContent, MatDialogActions, MatAnchor, MatDialogClose],
  template: `
  <mat-dialog-content>
    <h4>To use the feature:{{this.data}} you have to be logged in</h4>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button matButton="filled" [mat-dialog-close]="true">Log in</button>
    <button matButton="outlined" (click)="onNoClick()">No thanks</button>
  </mat-dialog-actions>
  `,
  styleUrl: './info-modal.css',
})
export class InfoModal {
  readonly dialogRef = inject(MatDialogRef<InfoModal>);
  readonly data = inject<string>(MAT_DIALOG_DATA);

  onNoClick() {
    this.dialogRef.close();
  }
}
