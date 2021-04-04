import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ModelService } from '../model.service';
import { Model } from '../model';

@Component({
  selector: 'app-addmodel',
  templateUrl: './addmodel.component.html',
  styleUrls: ['./addmodel.component.css']
})
export class AddmodelComponent implements OnInit {

  model = new Model();
  msg='';

  constructor(private _service : ModelService, private _router : Router) { }

  ngOnInit() {
  }

  addmodeltodb(val){
    console.warn(val);
    this._service.addModelListFromRemote(this.model).subscribe(
      data =>{
        console.log("response recieved");
        this._router.navigate(['/login'])
      },
      error =>{
        console.log("exception occured");
        this.msg=error.error;
      }
    )
      }

}
