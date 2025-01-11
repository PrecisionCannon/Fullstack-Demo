import { Component } from '@angular/core';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-cars-table',
  imports: [CarComponent],
  template: `
    <h1>Select make to view: <input class="makeInput" type=text></h1>
    <app-car></app-car>
  `,
  styleUrl: './cars-table.component.css'
})
export class CarsTableComponent {

}
