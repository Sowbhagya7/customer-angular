import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { ServiceRequest } from '../service-request';

@Component({
  selector: 'app-updaecustomerdetails',
  templateUrl: './updaecustomerdetails.component.html',
  styleUrls: ['./updaecustomerdetails.component.scss']
})
export class UpdaecustomerdetailsComponent implements OnInit {
  users: Customer=new Customer();
  customerid:number=0;
  constructor(private service :CustomerService,public router:Router) { }

  ngOnInit(): void {
    console.log(this.users)
  }
  findcustomer(){
    this.service.findcustomer(this.customerid).subscribe((data : any) =>{
      this.users=data;
    })
  }
  update(){
    console.log("register started"+this.users);
    this.service.update(this.users,this.customerid).subscribe((data) => {
      console.log(data);
      alert("Update Success")
      this.router.navigateByUrl('');
  }
    );
}
}
