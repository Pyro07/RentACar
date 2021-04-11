import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetailDto } from 'src/app/models/customerDetailDto';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  apiUrl = "https://localhost:44392/api/customer/getcustomerdetails";

  constructor(private httpClient: HttpClient) { }

  getCustomerDetails(): Observable<ListResponseModel<CustomerDetailDto>> {
    return this.httpClient.get<ListResponseModel<CustomerDetailDto>>(this.apiUrl);
  }
}
