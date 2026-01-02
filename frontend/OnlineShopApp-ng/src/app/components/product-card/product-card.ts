import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard,MatCardHeader,MatCardTitle,MatCardSubtitle,MatCardActions,MatCardContent,MatCardFooter,MatCardImage, MatCardMdImage } from '@angular/material/card';
import { MatGridTile } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'product-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardMdImage,
    MatCardActions,
    MatCardFooter,
    MatGridTile,
    MatIcon,
    MatButton
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

}
