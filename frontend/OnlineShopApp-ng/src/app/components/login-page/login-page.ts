import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormGroup,FormControl,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'login-page',
  imports: [NgOptimizedImage,FormsModule,ReactiveFormsModule],
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
    <div class="login-page">
      <!-- <img
          [ngSrc]="'/assets/doodleBG.jpg'"
          class="img-fluid"
          alt="hero img missing"
          
          fill
          priority
        /> -->
      <div class="login-form">
        <div class="container">
          <div class="row">
            <div class="col">
              <h2 class="login-title">Login</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12" style="padding:1rem">
              <label for="email" class="input-label">Email address</label><br>
              <input formControlName="email" id="email" class="text-input" type="text" >
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12" style="padding:1rem">
              <label for="username" class="input-label">Username</label><br>
              <input formControlName="username" id="username" class="text-input" type="text">
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12" style="padding:1rem">
              <label for="password" class="input-label">Password</label><br>
              <input formControlName="password" id="password" class="text-input" type="password" >
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12" style="padding:1rem">
              <p >{{formInfo}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12" style="padding:2rem;margin: auto;">
              <input class="form-btn" type="submit" value="Sign-in">
            </div>
          </div>
        </div>
      </div>
    </div>
</form>
  `,
  styleUrl: './login-page.css',
})
export class LoginPage {
  profileForm = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  });
  email:string = "";
  password:string = "";
  username:string = "";
  formInfo:string ="-";
  hidden:boolean=true;

  handleSubmit(){
    this.formInfo = this.profileForm.value.email+"; "+ this.profileForm.value.username +"; "+ "("+this.profileForm.value.password+")"
  }

}
