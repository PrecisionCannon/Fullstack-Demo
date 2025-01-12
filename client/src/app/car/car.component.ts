import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'tr[app-car]',
  imports: [CommonModule],
  template: `
    <td>{{car.name}}</td>
    <td>{{car.make}}</td>
    <td>{{car.expiry}}</td>
  `,
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input() car!: Car;
}