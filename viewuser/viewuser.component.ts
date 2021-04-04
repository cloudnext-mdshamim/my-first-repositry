import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationUserService } from '../registration-user.service';
import { User } from '../user';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

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
  
  gotolist(){
    console.log('go back');
    this._router.navigate(['/userlist'])
  }
}
