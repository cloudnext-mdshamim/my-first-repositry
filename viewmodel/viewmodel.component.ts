import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from '../model';
import { ModelService } from '../model.service';

@Component({
  selector: 'app-viewmodel',
  templateUrl: './viewmodel.component.html',
  styleUrls: ['./viewmodel.component.css']
})
export class ViewmodelComponent implements OnInit {

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

  gotolist(){
    console.log('go back');
    this._router.navigate(['/modellist'])
  }
}