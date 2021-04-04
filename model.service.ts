import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  
  constructor(private _http : HttpClient) { }

  fetchModelListFromRemote():Observable<any>{
    return this._http.get<any>("http://localhost:9091/getmodellist/");
  }

  addModelListFromRemote(model : Model):Observable<any>{
    return this._http.post<any>("http://localhost:9091/addmodellist", model);
  }

  fetchModelByIdFromRemote(id : number) : Observable<any> {
    return this._http.get<any>("http://localhost:9091/getmodelbyid/"+id);
  }

  /* public updateModelFromRemote(model : Model) : Observable<any>{
    return this._http.post<any>("http://localhost:9091/addmodellist", Model);
  } */

  deleteModelByIdFromRemote(id : number) : Observable<any> {
    return this._http.delete<any>("http://localhost:9091/deletemodelbyid/"+id);
  }
}
