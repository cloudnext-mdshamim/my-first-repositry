import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationUserService } from '../registration-user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg = '';

constructor(private _service : RegistrationUserService, private _router : Router) { }

  ngOnInit() {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/modellist']);
      },
      error => {
        console.log("exception occured");
        this.msg="Bad Credencials, please enter valid email and password";
      }
    )
  }

  gotoregistration() {
    this._router.navigate(['/registration']);
  }
}