import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/CarService/car.service';
import { ImageService } from 'src/app/services/ImageService/image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars: CarDetailDto[];
  images: CarImage[];

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute,
    private imageService: ImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarDetailById(params["carId"]);
        this.getImagesByCarId(params["carId"]);
      }

    });
  }

  getCarDetailById(carId: number) {
    this.carService.getCarDetailById(carId).subscribe((response => {
      this.cars = response.data;
    }));
  }

  getImagesByCarId(carId: number) {
    this.imageService.getImagesByCarId(carId).subscribe((response => {
      this.images = response.data;
    }))
  }

}
