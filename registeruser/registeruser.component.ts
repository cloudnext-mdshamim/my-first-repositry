import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { RegistrationUserService } from '../registration-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
user = new User();
msg='';
  constructor(private _service : RegistrationUserService, private _router : Router) { }

  ngOnInit(): void {
  }

  registerUser(val) {
    console.warn(val);
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/login'])
      },
      error => {
        console.log("Exception Occured");
        this.msg=error.error;
      }
    )
  }
}
