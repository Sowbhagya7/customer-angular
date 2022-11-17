import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {
customers: Customer[]=[]
  constructor(private service :CustomerService) { }

  ngOnInit(): void {
    this.service.getCustomers().subscribe((data: Customer[]) => {
      console.log(data);
      this.customers = data;
  });
  }

}
