import { Component, inject, input } from '@angular/core';
import { MatDialog, MatDialogContent, MatDialogActions, MatDialogRef, MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { MatAnchor } from "@angular/material/button";
import { RouterOutlet,RouterLink } from "@angular/router";
import { IBillingInfo, IUser, phoneNumberPrefixes } from '../../../types';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { UpperCasePipe } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { BillingInfoModalConfig } from '../settings/settings';
import { MatDivider } from "@angular/material/divider";
import { MatRadioButton } from '@angular/material/radio';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatSelect, MatOption } from '@angular/material/select';
import { UserAPI } from '../../services/userAPI';


@Component({
  selector: 'billing-info-modal',
  imports: [MatDialogContent, MatDialogActions, MatAnchor, MatDialogClose, FormsModule, ReactiveFormsModule, MatFormField, MatLabel, UpperCasePipe, MatInput, MatDivider, MatRadioButton, MatCheckbox, MatSelect, MatOption],
  template: `
  <mat-dialog-content>
    <h4>New billing info</h4>
  </mat-dialog-content>
  <form [formGroup]="dialogForm" (ngSubmit)="handleSubmit()" style="padding:1rem">

    
    <mat-form-field>
      <mat-label>Full name</mat-label>
      <input matInput #input formControlName="fullName" placeholder="first name LAST NAME"/>
    </mat-form-field>
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
      <input matInput #input formControlName="country"/>
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
    <mat-form-field>
      <mat-label >Phone prefix</mat-label>
      <mat-select matInput #input formControlName="phonePrefix" >
        @for(prefix of prefixes;track $index){
          <mat-option [value]="prefix.prefix"> {{prefix.country}} {{prefix.prefix}}</mat-option>
        }
      </mat-select>
    </mat-form-field>
    <mat-form-field>
      <mat-label>Phone number</mat-label>
      <input matInput #input formControlName="phoneNumber"/>
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
  userApi = inject(UserAPI);
  userId:string = this.data.id;
  dialogForm = new FormGroup({
    fullName: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
    county: new FormControl(''),
    state: new FormControl('',[Validators.required]),
    district: new FormControl('',),
    city: new FormControl('',[Validators.required]),
    streetAddress: new FormControl('',[Validators.required]),
    zipCode: new FormControl(''),
    phonePrefix: new FormControl(''),
    phoneNumber: new FormControl('',[Validators.required,Validators.maxLength(15)]),
  });

  prefixes: {country:string,prefix:string}[] = [
    { country: 'United States', prefix: '+1' },
    { country: 'Canada', prefix: '+1' },
    { country: 'United Kingdom', prefix: '+44' },
    { country: 'Germany', prefix: '+49' },
    { country: 'France', prefix: '+33' },
    { country: 'Australia', prefix: '+61' },
    { country: 'Japan', prefix: '+81' },
    { country: 'China', prefix: '+86' },
    { country: 'India', prefix: '+91' },
    { country: 'Brazil', prefix: '+55' },
    { country: 'Mexico', prefix: '+52' },
    { country: 'South Korea', prefix: '+82' },
    { country: 'Italy', prefix: '+39' },
    { country: 'Spain', prefix: '+34' },
    { country: 'Netherlands', prefix: '+31' },
    { country: 'Sweden', prefix: '+46' },
    { country: 'Norway', prefix: '+47' },
    { country: 'Denmark', prefix: '+45' },
    { country: 'Finland', prefix: '+358' },
    { country: 'Singapore', prefix: '+65' },
    { country: 'New Zealand', prefix: '+64' },
    { country: 'Austria', prefix: '+43' },
    { country: 'Belgium', prefix: '+32' },
    { country: 'Czech Republic', prefix: '+420' },
    { country: 'Poland', prefix: '+48' },
    { country: 'Portugal', prefix: '+351' },
    { country: 'Greece', prefix: '+30' },
    { country: 'Hungary', prefix: '+36' },
    { country: 'Romania', prefix: '+40' },
    { country: 'Ireland', prefix: '+353' },
    { country: 'Switzerland', prefix: '+41' },
    { country: 'Croatia', prefix: '+385' },
    { country: 'Slovakia', prefix: '+421' },
    { country: 'Slovenia', prefix: '+386' },
    { country: 'Bulgaria', prefix: '+359' },
    { country: 'Lithuania', prefix: '+370' },
    { country: 'Latvia', prefix: '+371' },
    { country: 'Estonia', prefix: '+372' },
    { country: 'Luxembourg', prefix: '+352' },
    { country: 'Malta', prefix: '+356' },
    { country: 'Cyprus', prefix: '+357' },
    { country: 'Serbia', prefix: '+381' },
    { country: 'Ukraine', prefix: '+380' }
  ]; 

  handleSubmit(){
    const newBilling:IBillingInfo = {
      id: '',
      userId:this.userId,
      fullName:this.dialogForm.value.fullName as string,
      country:this.dialogForm.value.country as string,
      state:this.dialogForm.value.state as string,
      county:this.dialogForm.value.county as string,
      district:this.dialogForm.value.district as string,
      city:this.dialogForm.value.city as string,
      streetAddress:this.dialogForm.value.streetAddress as string,
      zipCode:this.dialogForm.value.zipCode as string,
      phoneNumber:this.dialogForm.value.phoneNumber as string
    }
      
    this.userApi.updateBillingInfo(this.userId,newBilling)
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
