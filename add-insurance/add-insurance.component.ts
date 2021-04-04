import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from '../insurance';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.css']
})
export class AddInsuranceComponent implements OnInit {

  insurancedata = new Insurance();

  constructor(private _service : InsuranceService, private _router : Router) { }

  ngOnInit() {
  }

  addinsurancetodb(val){
    console.warn(val);
    this._service.addInsuranceListFromRemote(this.insurancedata).subscribe(
      data =>{
        console.log("response recieved");
        this._router.navigate(['/viewInsurance'])
      },
      error =>{
        console.log("exception occured");
      }
    )
      }

}
