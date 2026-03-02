import { Component, inject, input } from '@angular/core';
import { MatDialog, MatDialogContent, MatDialogActions, MatDialogRef, MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { MatAnchor } from "@angular/material/button";
import { RouterOutlet,RouterLink } from "@angular/router";
import { IUser } from '../../../types';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { UpperCasePipe } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { BillingInfoModalConfig } from '../settings/settings';
import { MatDivider } from "@angular/material/divider";


@Component({
  selector: 'billing-info-modal',
  imports: [MatDialogContent, MatDialogActions, MatAnchor, MatDialogClose, FormsModule, ReactiveFormsModule, MatFormField, MatLabel, UpperCasePipe, MatInput, MatDivider],
  template: `
  <mat-dialog-content>
    <h4>New billing info</h4>
  </mat-dialog-content>
  <form [formGroup]="dialogForm" (ngSubmit)="handleSubmit()" style="padding:1rem">

    <mat-form-field>
      <mat-label>Full name</mat-label>
      <input matInput #input placeholder="first name LAST NAME"/>
    </mat-form-field>
  
    <mat-form-field>
      <mat-label>Country</mat-label>
      <input matInput #input/>
    </mat-form-field>
    <mat-form-field>
      <mat-label>State</mat-label>
      <input matInput #input/>
    </mat-form-field>
    <mat-form-field>
      <mat-label>County</mat-label>
      <input matInput #input />
    </mat-form-field>
    <mat-form-field>
      <mat-label>District</mat-label>
      <input matInput #input />
    </mat-form-field>
    <mat-form-field>
      <mat-label>City</mat-label>
      <input matInput #input />
    </mat-form-field>
    <mat-form-field>
      <mat-label>Street address</mat-label>
      <input matInput #input />
    </mat-form-field>
    <mat-form-field>
      <mat-label>Zip code</mat-label>
      <input matInput #input />
    </mat-form-field>
    <mat-form-field>
      <mat-label>Phone number</mat-label>
      <input matInput #input />
    </mat-form-field>

  </form>

  <mat-dialog-actions>
    <button matButton="filled" [mat-dialog-close]="true">Submit</button>
    <button matButton="outlined" (click)="onNoClick()">Cancel</button>
  </mat-dialog-actions>
  `,
  styleUrl: './dialog-modal.css',
})
export class BillingInfoModal {
  readonly dialogRef = inject(MatDialogRef<BillingInfoModal>);
  readonly data = inject<IUser>(MAT_DIALOG_DATA);
  dialogForm = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    username: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(30)]),
    password: new FormControl('',[Validators.minLength(6),Validators.pattern(/[a-zA-Z0-9]*/)])
  });

  handleSubmit(){
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
