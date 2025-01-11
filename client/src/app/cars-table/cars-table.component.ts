import { Component } from '@angular/core';
import { CarComponent } from '../car/car.component';
import { Car } from '../car';

@Component({
  selector: 'app-cars-table',
  imports: [CarComponent],
  template: `
    <h1>Select make to view: <input class="makeInput" type=text></h1>
    <table>
      <app-car *ngfor="let car of carsList" [car]="car"></app-car>
    </table>
  `,
  styleUrl: './cars-table.component.css'
})
export class CarsTableComponent {
  carsList: Car[] = [];
}
