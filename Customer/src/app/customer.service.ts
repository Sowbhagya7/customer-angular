import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from './customer';
import { ServiceRequest } from './service-request';


const RegisterApi="http://localhost:9090/customer/register";
const Login="http://localhost:9090/customer/login";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private client:HttpClient) { }

  register(user :Customer) :Observable<any>{
    console.log(user,JSON.stringify(user));
    return this.client.post(RegisterApi,user);
    
  }
  login(user:Customer) {
    ///const header = new HttpHeaders().set('Authorization',  "Bearer "+localStorage.getItem("token"));
return this.client.post(Login,user
  
  );
  }

  createrequest( req: ServiceRequest,customerid:number) : Observable<any>
  {
     
      return this.client.post("http://localhost:9090/customers/serviceRequest/"+customerid+"/createrequest",req);
  }
  
  getrequest(status:String,customerid:number): Observable<any>{
    return this.client.get("http://localhost:9090/customers/serviceRequest/findReqby/"+customerid+"/"+status);
  }

  update(user :Customer,customerid:number) :Observable<any>{
    console.log(user,JSON.stringify(user));
    return this.client.put("http://localhost:9090/customer/updatecustomerdetails/"+customerid,user);
    
  }
  findcustomer(customerid:number){
    return this.client.get("http://localhost:9090/customer/getcustomerid/"+customerid)
  }
  findrequest(requestid:number){
    return this.client.get("http://localhost:9090/customers/serviceRequest/findrequestbyID/"+requestid)
  }

  getCustomers(): Observable<Customer[]>{
    return this.client.get<Customer[]>("http://localhost:9090/customer/getCustomers");
  }

  getrequests(): Observable<ServiceRequest[]>{
    return this.client.get<ServiceRequest[]>("http://localhost:9090/customers/serviceRequest/getlistofrequests");
  }
  updaterequest(request :ServiceRequest,customerid:number,requestid:number) :Observable<any>{
    console.log(request,JSON.stringify(request));
    return this.client.put("http://localhost:9090/customers/serviceRequest/"+customerid+"/updaterequest/"+requestid,request);
    
  }
}
