import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationUserService } from '../registration-user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

user = new User();
msg='';
  constructor(private _service : RegistrationUserService, private _router : Router, private _activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchUserByIdFromRemote(id).subscribe(
      data => {
        console.log("data recieved");
        this.user=data;
      },
      error => console.log("Exception Occured")
    )
  }

  updateUserOnSubmit(val) {
    console.warn(val);
    this._service.updateUserFromRemote(this.user).subscribe(
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
  gotolist(){
    console.log('go back');
    this._router.navigate(['/userlist'])
  }

gotoDeleteUser(index:number){
console.log(this.user)
  }
}
