import { Component } from '@angular/core';

@Component({
  selector: 'settings',
  imports: [],
  template: `
  <div class="row">
    <div class="col-lg-2">
      <div id="side-menu"></div>
    </div>
    <div class="col-lg-9">
      <div id="main-content">
        <h1>Settings</h1>
    </div>
      
    </div>  
  </div>
  
    
  `,
  styleUrl: './settings.css',
})
export class Settings {

}
