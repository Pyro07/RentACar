import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { RentDetailDto } from 'src/app/models/rentDetailDto';

@Injectable({
  providedIn: 'root'
})

export class RentService {
  apiUrl = "https://localhost:44392/api/rental/getrentdetails";

  constructor(private httpClient: HttpClient) { }

  getRentDetails(): Observable<ListResponseModel<RentDetailDto>> {
    return this.httpClient.get<ListResponseModel<RentDetailDto>>(this.apiUrl);
  }
}
