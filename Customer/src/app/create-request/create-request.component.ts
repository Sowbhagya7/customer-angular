import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { ServiceRequest } from '../service-request';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.scss']
})
export class CreateRequestComponent implements OnInit {
request: ServiceRequest=new ServiceRequest();
customerid:number=0;
  constructor(private service:CustomerService,public router:Router) { }

  ngOnInit(): void {
  }
  createRequest(){
    console.log(this.request); 
   
   this.service.createrequest(this.request,this.customerid).subscribe({
    next: (res:any)=>{
      console.log("Request created successfully" ,res);
      alert("Request created successfully")
      this.router.navigateByUrl('');
  },
  error: (err:any)=>{
    console.log(err);
   
}
  })
  
  }
}
