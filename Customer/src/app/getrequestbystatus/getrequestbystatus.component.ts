import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ServiceRequest } from '../service-request';

@Component({
  selector: 'app-getrequestbystatus',
  templateUrl: './getrequestbystatus.component.html',
  styleUrls: ['./getrequestbystatus.component.scss']
})
export class GetrequestbystatusComponent implements OnInit {
  request:ServiceRequest[]=[];
status:String="";
customerid:number=0;
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    
  }
  getrequest(){
    console.log(this.customerid,this.status);
    this.service.getrequest(this.status,this.customerid).subscribe((data: ServiceRequest[]) => {
      console.log(data);
     
      this.request=data;
      console.log(this.request);
      //this.router.navigate(["/SearchResponse"]);
  });
  }

}
