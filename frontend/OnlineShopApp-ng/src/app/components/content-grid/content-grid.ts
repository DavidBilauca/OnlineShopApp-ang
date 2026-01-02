import { Component } from '@angular/core';

import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'content-grid',
  imports: [ProductCard],
  templateUrl: './content-grid.html',
  styleUrl: './content-grid.css',
})
export class ContentGrid {

}
