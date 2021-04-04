import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationUserService {

  constructor(private _http : HttpClient) { }

  public loginUserFromRemote(user : User) : Observable<any>{
    return this._http.post<any>("http://localhost:9091/login", user)
  }

  public registerUserFromRemote(user : User) : Observable<any>{
    return this._http.post<any>("http://localhost:9091/registeruser", user);
  }

  url : string = "http://localhost:9091/getuserlist";
  getUsers(){
    return this._http.get<User[]>(this.url);
  }

  fetchUserByIdFromRemote(id : number) : Observable<any> {
    return this._http.get<any>("http://localhost:9091/getuserbyid/"+id);
  }

  public updateUserFromRemote(user : User) : Observable<any>{
    return this._http.post<any>("http://localhost:9091/updateuser", user);
  }

  deleteUserByIdFromRemote(id : number) : Observable<any> {
    return this._http.delete<any>("http://localhost:9091/deleteuserbyid/"+id);
  }
}
