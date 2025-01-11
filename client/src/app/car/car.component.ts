import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'app-car',
  imports: [CommonModule],
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
  @Input() car!: Car;
}
