import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { ServiceRequest } from '../service-request';

@Component({
  selector: 'app-updaterequest',
  templateUrl: './updaterequest.component.html',
  styleUrls: ['./updaterequest.component.scss']
})
export class UpdaterequestComponent implements OnInit {
  request:ServiceRequest=new ServiceRequest();
customerid:number=0;
requestId:number=0;
  constructor(private service:CustomerService,public router:Router) { }

  ngOnInit(): void {
  }
  findrequest(){
    this.service.findrequest(this.requestId).subscribe((data : any) =>{
      this.request=data;
    })
  }
  update(){
    console.log("register started"+this.request);
    this.service.updaterequest(this.request,this.customerid,this.requestId).subscribe((data) => {
      console.log(data);
      alert("Update Success")
      this.router.navigateByUrl('');
  }
    );
}
}
