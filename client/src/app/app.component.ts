import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarsTableComponent} from './cars-table/cars-table.component';

@Component({
  selector: 'app-root',
  imports: [CarsTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
