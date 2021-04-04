import { Component, OnInit } from '@angular/core';
import { RegistrationUserService } from '../registration-user.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users : User[] = [];
  userName : any;
  constructor(private _service : RegistrationUserService, private _route:Router) { }

ngOnInit() : void {
            this._service.getUsers().subscribe((response) => {
            this.users=response;
 })
  }
  gotoEditUser(id : number) {
    console.log("Userlist gotoEditUser():id="+id);
    this._route.navigate(['/edituser/'+id]);
  }

  gotoViewUser(id : number) {
    console.log("id"+id);
    this._route.navigate(['/viewuser',id]);
  }

gotoDeleteUser(id : number){
  this._service.deleteUserByIdFromRemote(id).subscribe(
  data => {
    console.debug("delete successfully");
    this._route.navigate(['/userlist']);
  },
  error => console.log("Exception Occured")
)
  }

  Search(){
    if(this.userName == "") {
      this.ngOnInit();
    }
    else {
      this.users = this.users.filter(res => {
        return res.userName.toLocaleLowerCase().match(this.userName.toLocaleLowerCase());
      });
    }
  }
}