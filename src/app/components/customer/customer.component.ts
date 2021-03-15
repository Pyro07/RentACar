import { Component, OnInit } from '@angular/core';
import { CustomerDetailDto } from 'src/app/models/customerDetailDto';
import { CustomerService } from 'src/app/services/CustomerService/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: CustomerDetailDto[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  getCustomerDetails() {
    this.customerService.getCustomerDetails().subscribe((response => {
      this.customers = response.data;
    }));
  }

}
