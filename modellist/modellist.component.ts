import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModelService } from '../model.service';

@Component({
  selector: 'app-modellist',
  templateUrl: './modellist.component.html',
  styleUrls: ['./modellist.component.css']
})
export class ModellistComponent implements OnInit {
  
  model:any[];

  constructor(private _service : ModelService, private _router : Router) { }

  ngOnInit() {
    console.log("=========init started=========");
    this._service.fetchModelListFromRemote().subscribe(
      data => {
        this.model=data;
        console.log("response recieved"+data)},
      error => console.log("Exception Occured"+error)
    )
  }

  gototEditModel(id : number) {
    console.log("modellist onEditUser():id="+id);
    this._router.navigate(['/editModel/'+id]);
  }

  gotoViewModel(id : number) {
    console.log("id"+id);
    this._router.navigate(['/viewmodel',id]);
  }

  gotoDeleteModel(id : number){
    this._service.deleteModelByIdFromRemote(id).subscribe(
    data => {
      console.debug("delete successfully");
      this._router.navigate(['/userlist']);
    },
    error => console.log("Exception Occured")
  )
    }
}
