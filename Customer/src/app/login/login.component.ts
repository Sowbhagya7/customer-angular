import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
users:Customer=new Customer();
  constructor(private service :CustomerService,public router:Router) { }

  ngOnInit(): void {
  }
  login(){
    console.log("register started"+this.users);
    this.service.login(this.users).subscribe((data) => {
      console.log(data);
      alert("login success")
      this.router.navigateByUrl('');
  }
    );
}
}
