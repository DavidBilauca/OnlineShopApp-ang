import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { Field } from '@angular/forms/signals';
import { MatButton, MatMiniFabButton } from '@angular/material/button';

@Component({
  selector: 'settings-list',
  imports: [MatIcon, MatDivider, Field,MatButton,MatMiniFabButton],
  template: `
    @defer (on viewport; when fields.length>0) {
      <div class="container" style="margin-bottom: 3rem;font-size: medium;">
        <div class="row justify-content-start" style="margin-bottom: 1rem;margin-top: 2rem;">
          <div class="col-sm-3">
            <h4> Billing Info</h4>
          </div>
          <div class="col-sm-1" style="margin-left: -8rem;">
            <button matMiniFab (click)="deleteAction()" class="btn-danger" style="width: 3rem;">
              <mat-icon style="size: 2rem;margin-left: auto;margin-right: auto;font-size: 1.5rem;">delete</mat-icon>
            </button>
          </div>
        </div>
        @for (field of this.fields; track $index) {
          <div class="row justify-content-start">
            <div class="col-sm-2">{{ field.fieldname }}</div>
            <div class="col-sm-4">
              <span style="color:aqua;margin-right: 0.5rem;">{{ field.value }}</span>
            </div>
            <div class="col-sm-2">
              <button matButton="outlined" (click)="field.editAction()">
                <mat-icon class="text-icon">edit</mat-icon>
              </button>
            </div>
            <div class="col-sm-4"></div>
          </div>
          <mat-divider class="settings-divider" />
        }
      </div>
    } @placeholder {
      <p>no info yet</p>
    } @loading {
      <p>info loading...</p>
    }
  `,
  styleUrl: './settings-list.css',
})
export class SettingsList {
  data = input.required<Object>({});
  deleteAction = input.required<Function>();
  fields: { fieldname: string; value: string; editAction: Function }[] = [];

  async ngOnInit() {
    Object.entries(this.data()).forEach((field) => {
      if(field[1] instanceof Object) return;
      if(field[0].toLowerCase().includes("id")) return;
      this.fields.push({
        fieldname: this.formatFieldName(field[0]),
        value: this.formatFieldValue(field[1]),
        editAction: () => {},
      });
    });
  }

  formatFieldName(fieldName:string){
    
    var result = fieldName.replace(/([a-z])([A-Z])/g,'$1 $2').toLowerCase();
    return result;
  }

  formatFieldValue(fieldValue:string){
    if(fieldValue=='')return "-";
    return fieldValue;
  }
}
