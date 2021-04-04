import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { UserlistComponent } from './userlist/userlist.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModellistComponent } from './modellist/modellist.component';
import { AddmodelComponent } from './addmodel/addmodel.component';
import { EditmodelComponent } from './editmodel/editmodel.component';
import { ViewmodelComponent } from './viewmodel/viewmodel.component';
import { InsuranceCreaditScoringToolComponent } from './insurance-creadit-scoring-tool/insurance-creadit-scoring-tool.component';
import { AddInsuranceComponent } from './add-insurance/add-insurance.component';
import { EditInsuranceComponent } from './edit-insurance/edit-insurance.component';
import { ViewInsuranceComponent } from './view-insurance/view-insurance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisteruserComponent,
    LoginsuccessComponent,
    UserlistComponent,
    EdituserComponent,
    ViewuserComponent,
    ModellistComponent,
    AddmodelComponent,
    EditmodelComponent,
    ViewmodelComponent,
    InsuranceCreaditScoringToolComponent,
    AddInsuranceComponent,
    EditInsuranceComponent,
    ViewInsuranceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
