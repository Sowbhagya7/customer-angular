import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { GetrequestbystatusComponent } from './getrequestbystatus/getrequestbystatus.component';
import { ResponseComponent } from './response/response.component';
import { UpdaecustomerdetailsComponent } from './updaecustomerdetails/updaecustomerdetails.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { RequestlistComponent } from './requestlist/requestlist.component';
import { UpdaterequestComponent } from './updaterequest/updaterequest.component';
import { RequestresponseComponent } from './requestresponse/requestresponse.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    CreateRequestComponent,
    GetrequestbystatusComponent,
    ResponseComponent,
    UpdaecustomerdetailsComponent,
    CustomerlistComponent,
    RequestlistComponent,
    UpdaterequestComponent,
    RequestresponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
