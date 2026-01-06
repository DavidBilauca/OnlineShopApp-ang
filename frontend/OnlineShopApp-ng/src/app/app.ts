import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ContentGrid } from './components/content-grid/content-grid';
import { SideNav } from './components/side-nav/side-nav';
import { ICategory, IProduct } from '../types';
import { Categories, MockProducts } from './mockdata';
import { NgOptimizedImage } from '@angular/common';
// import {} from '../../assets'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  //templateUrl: './app.html',
  template: `
    <router-outlet />
  `,
  styleUrl: './app.css'
})
export class App {
  
}
