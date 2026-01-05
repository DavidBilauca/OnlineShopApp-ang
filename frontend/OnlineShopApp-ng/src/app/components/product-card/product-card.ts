import { Component,input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard,MatCardHeader,MatCardTitle,MatCardSubtitle,MatCardActions,MatCardContent,MatCardFooter,MatCardImage, MatCardMdImage } from '@angular/material/card';
import { MatGridTile } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';
import { IProduct } from '../../../types';

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
  productInfo = input.required<IProduct>();
  padd0:string = "padding:0;";
  border:string = "border:1px solid;"
  autoMargins:string="margin-left:auto;margin-right:auto;";
  autoPadd:string="padding:auto;";
  center:string="padding:auto;";
  addStyles = (args:Array<string>) =>{
    var result = "";
    args.forEach(arg=>result = result.concat(arg));
    return result;
  }
  testStyle = ()=>{
    return this.padd0.concat(this.border);
  }
}
