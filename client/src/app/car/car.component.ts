import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'app-car',
  imports: [CommonModule],
  template: `
    <tr>
      <td>{{car.name}}</td>
      <td>{{car.make}}</td>
      <td>{{car.expiry}}</td>
    </tr>
  `,
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input() car!: Car;
}
