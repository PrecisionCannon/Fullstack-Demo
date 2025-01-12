import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from '../car/car.component';
import { Car } from '../car';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-table',
  imports: [CommonModule, CarComponent],
  template: `
    <h1>Select make to view: <input class="makeInput" type=text></h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Make</th>
          <th>Expiry</th>
        </tr>
      </thead>
      <tbody> 
        <tr *ngFor="let car of carsList" app-car [car]="car"></tr>
      </tbody>
    </table>
  `,
  styleUrl: './cars-table.component.css'
})
export class CarsTableComponent {
  carsService: CarsService = inject(CarsService);
  carsList: Car[] = [];
  make: string = "";

  constructor() {
    this.carsService.getCarsList(this.make).then((carsList: Car[]) => {
      this.carsList = carsList;
    });
  }
  
}