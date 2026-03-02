import { Component, inject, input } from '@angular/core';
import { MatTree, MatTreeNode } from '@angular/material/tree';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { IBillingInfo, IDeliveryInfo, IUser } from '../../../types';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor, MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';
import { BillingInfoModal } from '../dialog-modal/dialog-modal';
import { UserAPI } from '../../services/userAPI';

@Component({
  selector: 'settings',
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatIcon,
    MatAnchor,
    MatButton,
    MatMiniFabButton,
    MatDivider,
  ],
  template: `
    <div class="row">
      <div class="col-lg-1">
        <!-- <div id="side-menu">
      </div> -->
      </div>
      <div class="col-lg-10">
        <div id="main-content">
          <h1 style="margin-left: 1rem;">Settings</h1>
          <mat-accordion multi="true">
            <mat-expansion-panel>
              <mat-expansion-panel-header>
                <mat-panel-title>Name & credentials</mat-panel-title>
              </mat-expansion-panel-header>
              <div class="container">
                <div class="row justify-content-start">
                  <div class="col-sm-2">Email address:</div>
                  <div class="col-sm-4">
                    <span style="color:aqua;margin-right: 0.5rem;">{{ userInfo().email }}</span>
                  </div>
                  <div class="col-sm-2">
                    <button matButton="outlined" disabled>
                      <mat-icon class="text-icon">edit</mat-icon>
                    </button>
                  </div>
                  <div class="col-sm-4"></div>
                </div>
                <mat-divider class="settings-divider" />
                <div class="row justify-content-start">
                  <div class="col-sm-2 ">Current username:</div>
                  <div class="col-sm-4">
                    <span style="color:aqua;margin-right: 0.5rem;">{{ userInfo().username }}</span>
                  </div>
                  <div class="col-sm-2">
                    <button matButton="outlined" (click)="handleEditUsername()">
                      <mat-icon class="text-icon">edit</mat-icon>
                    </button>
                  </div>
                  <div class="col-sm-4"></div>
                </div>
                <mat-divider class="settings-divider" />
              </div>
            </mat-expansion-panel>
            <mat-expansion-panel>
              <mat-expansion-panel-header>
                <mat-panel-title>Billing & shipping</mat-panel-title>
              </mat-expansion-panel-header>
              <mat-expansion-panel>
                <mat-expansion-panel-header>
                  <mat-panel-title>Billing</mat-panel-title>
                </mat-expansion-panel-header>
                <button matButton="filled" (click)="handleAddBilling()">
                  <mat-icon>add</mat-icon>
                  Add billing info
                </button>
              </mat-expansion-panel>
              <mat-expansion-panel>
                <mat-expansion-panel-header>
                  <mat-panel-title>Delivery (shipping)</mat-panel-title>
                </mat-expansion-panel-header>
              </mat-expansion-panel>

              
            </mat-expansion-panel>
            <mat-expansion-panel>
              <mat-expansion-panel-header>
                <mat-panel-title>Order history</mat-panel-title>
              </mat-expansion-panel-header>
            </mat-expansion-panel>
            <mat-expansion-panel>
              <mat-expansion-panel-header>
                <mat-panel-title>Others</mat-panel-title>
              </mat-expansion-panel-header>
            </mat-expansion-panel>
          </mat-accordion>
        </div>
        <div class="col-lg-1"></div>
      </div>
    </div>
  `,
  styleUrl: './settings.css',
})
export class Settings {
  userInfo = input.required<IUser>();
  userApi = inject(UserAPI);
  readonly dialog = inject(MatDialog);



  handleAddBilling() {
    this.dialog.open(BillingInfoModal,{
      data:this.userInfo()});
  }

  handleEditUsername() {
    console.log('edit username');
  }

  openDialog():void {
      const dialogRef = this.dialog.open(BillingInfoModal,{data:"add to favorites"});
      dialogRef.afterClosed().subscribe(result=>{
        
      })
    }

}

export interface BillingInfoModalConfig {
  user: IUser,
  info: IBillingInfo
}

export interface DeliveryInfoModalConfig {
  user: IUser,
  info: IDeliveryInfo
}

