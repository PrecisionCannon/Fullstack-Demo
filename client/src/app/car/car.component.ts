import { Component, input, Input } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-car',
  imports: [],
  template: `
    <tr>
      <th>Name: {{car.name}}</th>
      <th>Make: {{car.make}}</th>
      <th>Expiry: {{car.expiry}}</th>
    </tr>
  `,
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input() car!:Car;
}
