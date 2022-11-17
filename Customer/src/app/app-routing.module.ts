import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
const routes: Routes = [
  { path:'register', component: RegisterComponent},
  { path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'header', component: HeaderComponent},
  {path:'create request', component: CreateRequestComponent},
  {path:'getrequestbystatus', component: GetrequestbystatusComponent},
  {path:'response', component: ResponseComponent},
  {path:'updatecustomerdetails', component: UpdaecustomerdetailsComponent},
  {path:"getcustomers", component: CustomerlistComponent},
  {path:"getrequests", component: RequestlistComponent},
  {path:"updaterequest", component: UpdaterequestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
