import { Component, inject, input } from '@angular/core';
import { ICategory } from '../../../types';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";


@Component({
  selector: 'side-nav',
  imports: [MatSlideToggle],
  template: `
  <div class="side-nav" >
    <p>side nav works</p>
    @for(category of categories();track $index){
        <mat-slide-toggle (change)="categoryChecked($event)" style=" margin-right: 1rem;margin-bottom: 0.5rem;"> {{category.name}}</mat-slide-toggle>
    }
  </div>
  `,
  // templateUrl: './side-nav.html',
  styleUrl: './side-nav.css',
})
export class SideNav {
  categories = input.required<ICategory[]>();
  categoryChecked = (e:MatSlideToggleChange)=>{
    console.log("button pressed: "+e.source.checked);
  }

  isNotNone = (str:string)=>{
    return str!="None";
  }
}
