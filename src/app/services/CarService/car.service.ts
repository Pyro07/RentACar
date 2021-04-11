import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  apiUrl = "https://localhost:44392/api/";

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "car/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByBrand(brandId: number):Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "car/getbybrand?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByColor(colorId: number):Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "car/getbycolor?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetailById(carId: number):Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "car/getcardetailbyid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}
