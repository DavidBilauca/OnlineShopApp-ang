import { Component, inject, input, output } from '@angular/core';
import { ICategory } from '../../../types';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";


@Component({
  selector: 'side-nav',
  imports: [MatSlideToggle],
  template: `
  
  <div class="side-nav" >
    <p>Choose filters:</p>
    @for(category of categories();track $index){
        <mat-slide-toggle 
        (change)="handleCheck($event,category)" 
        
        style=" margin-right: 1rem;margin-bottom: 0.5rem;"
        > 
          {{category.name}}
        </mat-slide-toggle>
    }
  </div>
  `,
  // templateUrl: './side-nav.html',
  styleUrl: './side-nav.css',
})
export class SideNav {
  categories = input.required<ICategory[]>();
  toggleEvent = output<{c:ICategory,state:boolean}>();

  // categoriesToggles = this.categories().map

  handleCheck = (e:MatSlideToggleChange,c:ICategory)=>{
    console.log(`${c.name}: `+(e.source.checked?'checked':'unchecked'));
    const state = e.source.checked;
    this.toggleEvent.emit({c,state});
  }

  handleMouseover = (e:MouseEvent,c:ICategory)=>{
    // console.log(`Mouse over ${c.name} category`);
  }

  isNotNone = (str:string)=>{
    return str!="None";
  }
}
