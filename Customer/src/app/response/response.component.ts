import { Component, Input, OnInit } from '@angular/core';
import { ServiceRequest } from '../service-request';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {
  @Input() requests:ServiceRequest[]=[];
  //[req : ServiceRequest] =this.requests;
  constructor() { }

  ngOnInit(): void {
    
  }


}
