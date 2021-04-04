import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Insurance } from './insurance';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private _http : HttpClient) { }

  url : string = "http://localhost:9091/getinsurancelist";
  getInsurance(){
    return this._http.get<Insurance[]>(this.url);
  }

  addInsuranceListFromRemote(insurance : Insurance):Observable<any>{
    return this._http.post<any>("http://localhost:9091/addinsurancelist", insurance);
  }

  fetchInsuranceListFromRemote():Observable<any>{
    return this._http.get<any>("http://localhost:9091/getinsurancelist/");
  }

  deleteInsuranceFromRemote(portfolio_name : String) : Observable<any> {
    return this._http.delete<any>("http://localhost:9091/deleteinsurance/"+portfolio_name);
  }
}
