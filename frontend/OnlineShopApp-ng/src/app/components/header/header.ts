import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import {MatIcon}from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbar,
    MatIcon,
    MatButton,
    MatMenuModule,
    RouterOutlet,
    RouterLink
],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
