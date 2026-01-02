import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import {MatIcon}from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbar
    ,MatIcon,
    MatButton,
    MatMenuModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
