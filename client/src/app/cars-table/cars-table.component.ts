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
  carsList: Car[] = [];
  carsService: CarsService = inject(CarsService);

  constructor() {
    this.carsService.getCarsList().then((carsList: Car[]) => {
      this.carsList = carsList;
    });
  }
  
}