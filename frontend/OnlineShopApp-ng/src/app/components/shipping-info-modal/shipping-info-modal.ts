import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogContent, MatDialogActions, MatDialogRef, MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { MatAnchor } from "@angular/material/button";
import { IDeliveryInfo, IUser } from '../../../types';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { UpperCasePipe } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MatDivider } from "@angular/material/divider";
import { UserAPI } from '../../services/userAPI';


@Component({
  selector: 'shipping-info-modal',
  imports: [MatDialogContent, MatDialogActions, MatAnchor, MatDialogClose, FormsModule, ReactiveFormsModule, MatFormField, MatLabel, UpperCasePipe, MatInput, MatDivider],
  template: `
  <mat-dialog-content>
    <h4>New shipping (delivery) info</h4>
  </mat-dialog-content>
  <form [formGroup]="dialogForm" (ngSubmit)="handleSubmit()" style="padding:1rem">

    <mat-form-field>
      <mat-label>Country</mat-label>
      <input matInput #input formControlName="country"/>
    </mat-form-field>
    <mat-form-field>
      <mat-label>State</mat-label>
      <input matInput #input formControlName="state"/>
    </mat-form-field>
    <mat-form-field>
      <mat-label>County</mat-label>
      <input matInput #input formControlName="county"/>
    </mat-form-field>
    <mat-form-field>
      <mat-label>District</mat-label>
      <input matInput #input formControlName="district"/>
    </mat-form-field>
    <mat-form-field>
      <mat-label>City</mat-label>
      <input matInput #input formControlName="city"/>
    </mat-form-field>
    <mat-form-field>
      <mat-label>Street address</mat-label>
      <input matInput #input formControlName="streetAddress"/>
    </mat-form-field>
    <mat-form-field>
      <mat-label>Zip code</mat-label>
      <input matInput #input formControlName="zipCode"/>
    </mat-form-field>

  </form>

  <mat-dialog-actions>
    <button matButton="filled" [mat-dialog-close]="true" (click)="handleSubmit()">Submit</button>
    <button matButton="outlined" (click)="onNoClick()">Cancel</button>
  </mat-dialog-actions>
  `,
  styleUrl: './shipping-info-modal.css',
})
export class ShippingInfoModal {
  readonly dialogRef = inject(MatDialogRef<ShippingInfoModal>);
  readonly data = inject<IUser>(MAT_DIALOG_DATA);
  userApi = inject(UserAPI);
  userId:string = this.data.id;
  dialogForm = new FormGroup({
    country: new FormControl('',[Validators.required]),
    county: new FormControl(''),
    state: new FormControl('',[Validators.required]),
    district: new FormControl('',),
    city: new FormControl('',[Validators.required]),
    streetAddress: new FormControl('',[Validators.required]),
    zipCode: new FormControl('')
  });

  handleSubmit(){
     const newShipping:IDeliveryInfo = {
          id: crypto.randomUUID(),
          userId:this.userId,
          country:this.dialogForm.value.country as string,
          state:this.dialogForm.value.state as string,
          county:this.dialogForm.value.county as string,
          district:this.dialogForm.value.district as string,
          city:this.dialogForm.value.city as string,
          streetAddress:this.dialogForm.value.streetAddress as string,
          zipCode:this.dialogForm.value.zipCode as string
        }
          
        this.userApi.updateShippingInfo(this.userId,newShipping)
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
