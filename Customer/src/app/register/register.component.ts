import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
users: Customer=new Customer();

  constructor(private service :CustomerService,public router:Router) {}

  ngOnInit(): void {
  }
  
  register(){
    console.log("register started"+this.users);
    this.service.register(this.users).subscribe((data) => {
      console.log(data);
      alert("Registration Success, Please login")
      this.router.navigateByUrl('/login');
  }
    );
}
}
