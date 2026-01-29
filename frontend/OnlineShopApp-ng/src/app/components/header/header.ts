import { Component, inject, input, output } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterOutlet, RouterLink } from '@angular/router';
import { IProduct, IUser } from '../../../types';
import { UserAPI } from '../../services/userAPI';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatIcon, MatButton, MatMenuModule, RouterOutlet, RouterLink],
  template: `
    <mat-toolbar>
      <!-- <div > -->
      <mat-icon>storefront</mat-icon>
      <span style="font-size: larger;margin-left: 0.5rem;">OnlineShopApp</span>

      <span class="header-spacer"></span>
      <div class="button-group">
        <button matButton="elevated" class="header-button">Products</button>
        <button matButton="elevated" class="header-button">Search</button>
      </div>
      <span class="header-spacer"></span>
      <button matButton class="header-button" [matMenuTriggerFor]="menu">
        <span>
        {{username}}
         </span>
        <span class="material-symbols-outlined" style="vertical-align: middle;size: 1rem;">
          account_circle
        </span>
      </button>
      <mat-menu #menu="matMenu">
        @if (!userSignedIn()) {
          <a mat-menu-item routerLink="login">Login</a>
          <a mat-menu-item routerLink="">Create Account</a>
        }
        @else {
          <a mat-menu-item>Log Out</a> 
          <a mat-menu-item (click)="showFavoritesList()">Favorites</a> 
        }
        
      </mat-menu>

      <!-- </div> -->
    </mat-toolbar>
    <router-outlet />
  `,
  styleUrl: './header.css',
})
export class Header {
  userAPIService = inject(UserAPI);
  userInfo = input.required<IUser>();
  favorites = output<void>();
  username:string = "Guest";
  

ngOnChanges(){
  this.username = this.userInfo().username;
}

  userSignedIn(){
    //console.log(this.userInfo());
    return this.userInfo().id!="";
  }

  showFavoritesList(){
    if(this.userSignedIn())
      this.favorites.emit();
  }

}
