import { Component, inject, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { CarComponent } from '../car/car.component';
import { Car } from '../car';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-table',
  imports: [CommonModule, FormsModule, CarComponent],
  template: `
    <h1>Select make to view: <input class="makeInput" type=text name="make" [(ngModel)]="make" (ngModelChange)="onMakeChange()">{{make}}</h1>
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
    this.updateCarsList();
  }
  
  onMakeChange(){
    this.updateCarsList();
  }

  updateCarsList(){
    this.carsService.getCarsList(this.make).then((carsList: Car[]) => {
      this.carsList = carsList;
    });
  }
}