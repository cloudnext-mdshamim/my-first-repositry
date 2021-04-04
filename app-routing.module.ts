import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInsuranceComponent } from './add-insurance/add-insurance.component';
import { AddmodelComponent } from './addmodel/addmodel.component';
import { EditInsuranceComponent } from './edit-insurance/edit-insurance.component';
import { EditmodelComponent } from './editmodel/editmodel.component';
import { EdituserComponent } from './edituser/edituser.component';
import { InsuranceCreaditScoringToolComponent } from './insurance-creadit-scoring-tool/insurance-creadit-scoring-tool.component';
import { LoginComponent } from './login/login.component';
import { ModellistComponent } from './modellist/modellist.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ViewInsuranceComponent } from './view-insurance/view-insurance.component';
import { ViewmodelComponent } from './viewmodel/viewmodel.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

const routes: Routes = [
  {path : '',component:LoginComponent},
  {path : 'modellist',component:ModellistComponent},
  {path : 'registration',component:RegisteruserComponent},
  {path : 'login',component:LoginComponent},
  {path : 'edituser/:id',component:EdituserComponent},
  {path : 'edituser',component:EdituserComponent},
  {path : 'viewuser',component:ViewuserComponent},
  {path : 'viewuser/:id',component:ViewuserComponent},
  {path : 'userlist',component:UserlistComponent},
  {path : 'addModel', component:AddmodelComponent},
  {path : 'editModel/:id', component:EditmodelComponent},
  {path : 'editModel', component:EditmodelComponent},
  {path : 'viewmodel',component:ViewmodelComponent},
  {path : 'viewmodel/:id',component:ViewmodelComponent},
  {path : 'insurance',component:InsuranceCreaditScoringToolComponent},
  {path : 'addinsurancelist',component:AddInsuranceComponent},
  {path : 'editInsurance/:portfolio_name',component:EditInsuranceComponent},
  {path : 'editInsurance',component:EditInsuranceComponent},
  {path : 'viewInsurance',component:ViewInsuranceComponent},
  {path : 'viewInsurance/:portfolio_name',component:ViewInsuranceComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
