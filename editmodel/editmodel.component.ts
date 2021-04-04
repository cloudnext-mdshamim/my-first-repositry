import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from '../model';
import { ModelService } from '../model.service';

@Component({
  selector: 'app-editmodel',
  templateUrl: './editmodel.component.html',
  styleUrls: ['./editmodel.component.css']
})
export class EditmodelComponent implements OnInit {

  model = new Model();

  constructor(private _service : ModelService, private _router : Router, private _activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchModelByIdFromRemote(id).subscribe(
      data => {
        console.log("data recieved");
        this.model=data;
      },
      error => console.log("Exception Occured")
    )
  }

  updateUserOnSubmit(val) {
    console.warn(val);
    this._service.addModelListFromRemote(this.model).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/modellist'])
      },
      error => {
        console.log("Exception Occured");
      }
    )
  }

  gotolist() {
    console.log('go back');
    this._router.navigate(['modellist']);
  }

  gotoDeleteUser(index:number){
    console.log(this.model)
      }
}
