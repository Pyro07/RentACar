import { Component, OnInit } from '@angular/core';
import { RentDetailDto } from 'src/app/models/rentDetailDto';
import { RentService } from 'src/app/services/RentService/rent.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  rents: RentDetailDto[] = [];
  constructor(private rentService: RentService) { }

  ngOnInit(): void {
    this.getRentDetails();
  }

  getRentDetails() {
    this.rentService.getRentDetails().subscribe((response => {
      this.rents = response.data;
    }));
  }

}
