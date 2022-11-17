import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ServiceRequest } from '../service-request';

@Component({
  selector: 'app-requestlist',
  templateUrl: './requestlist.component.html',
  styleUrls: ['./requestlist.component.scss']
})
export class RequestlistComponent implements OnInit {
requests:ServiceRequest[]=[]
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    this.service.getrequests().subscribe((data: ServiceRequest[]) => {
      console.log(data);
      this.requests = data;
  });
  }

}
