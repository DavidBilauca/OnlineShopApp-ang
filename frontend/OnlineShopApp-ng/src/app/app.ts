import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ContentGrid } from './components/content-grid/content-grid';
import { SideNav } from './components/side-nav/side-nav';
import { ICategory, IProduct } from '../types';
import { Categories, MockProducts } from './mockdata';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ContentGrid, SideNav],
  //templateUrl: './app.html',
  template: `
    <main>
      <app-header />
      <div class="container-flex">
        <div class="row">
          <div class="col-sm-2">
            <side-nav [categories]="categories"/>
          </div>
           <div class="col-lg-10">
            <content-grid [products]="products"/>
          </div>
        </div>
      </div>
      
      
      
    </main>
    <router-outlet />
  `,
  styleUrl: './app.css',
  //template:"<h1>hello world<.h1>"
})
export class App {
  products:IProduct[] = MockProducts;
  categories:ICategory[] = Categories.getCategories();

}
