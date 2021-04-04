import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from '../insurance';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-insurance-creadit-scoring-tool',
  templateUrl: './insurance-creadit-scoring-tool.component.html',
  styleUrls: ['./insurance-creadit-scoring-tool.component.css']
})
export class InsuranceCreaditScoringToolComponent implements OnInit {
  
  insurancedata : Insurance[] = [];
  portfolio_name : any;
  
  constructor(private _service : InsuranceService, private _route:Router) { }

  ngOnInit() {
    this._service.getInsurance().subscribe((response) => {
      this.insurancedata=response;
})
  }

  gotoEditInsurance(portfolio_name : String) {
    console.log("Userlist gotoEditInsurance():id="+portfolio_name);
    this._route.navigate(['/editInsurance/'+portfolio_name]);
  }

  gotoViewInsurance(portfolio_name : String) {
    console.log("id"+portfolio_name);
    this._route.navigate(['/viewInsurance',portfolio_name]);
  }

  gotoDeleteInsurance(portfolio_name : String){
  this._service.deleteInsuranceFromRemote(portfolio_name).subscribe(
  data => {
    console.debug("delete successfully");
    this._route.navigate(['/insurance']);
  },
  error => console.log("Exception Occured")
)
  }

  Search(){
    if(this.portfolio_name == "") {
      this.ngOnInit();
    }
    else {
      this.insurancedata = this.insurancedata.filter(res => {
        return res.portfolio_name.toLocaleLowerCase().match(this.portfolio_name.toLocaleLowerCase());
      });
    }
  }
}
