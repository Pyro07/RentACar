import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from "./components/brand/brand.component";
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from "./components/color/color.component";
import { CustomerComponent } from './components/customer/customer.component';
import { RentComponent } from './components/rent/rent.component';

const routes: Routes = [
  { path: 'brands', component: BrandComponent },
  { path: 'colors', pathMatch: "full", component: ColorComponent },
  { path: 'cars', pathMatch: "full", component: CarComponent },
  { path: 'rents', pathMatch: "full", component: RentComponent },
  { path: 'customers', pathMatch: "full", component: CustomerComponent },
  { path: 'cars/brand/:brandId', pathMatch: "full", component: CarComponent },
  { path: 'cars/color/:colorId', pathMatch: "full", component: CarComponent },
  { path: 'cars/car-detail/:carId', pathMatch: "full", component: CarDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
