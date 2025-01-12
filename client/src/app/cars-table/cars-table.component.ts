import { Component, DoCheck, inject, ChangeDetectorRef, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CarComponent } from '../car/car.component';
import { Car } from '../car';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-table',
  imports: [CommonModule, ReactiveFormsModule, CarComponent],
  template: `
    <h1>Select make to view: <input class="makeInput" type="text"></h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Make</th>
        <th>Expiry</th>
      </tr>
      <app-car *ngFor="let car of carsList; trackBy: identifyCar" [car]="car"></app-car>
    </table>
  `,
  styleUrl: './cars-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsTableComponent implements DoCheck {
  carsService: CarsService = inject(CarsService);
  carsList: Car[] = [];
  make: string = "";
  cdr: ChangeDetectorRef;
  zone: NgZone;

  constructor(cdr: ChangeDetectorRef, zone: NgZone) {
    this.cdr = cdr;
    this.zone = zone;
    this.carsService.getCarsList(this.make).then((carsList: Car[]) => {
      this.zone.run(() => {
        this.carsList = carsList;
        this.ngDoCheck();
        this.cdr.markForCheck(); 
        console.log("Instructing angular to check for changes");
      });
    });
    this.zone.run(() => {
      this.cdr.markForCheck();
      console.log("Instructing angular to check for changes");
    });
  }

  ngDoCheck(): void {
    //console.log(this.carsList);
  }

  identifyCar(index: number, car: Car){
    console.log("NgFor is Checking for changes in carsList");
    return car.name;  
  }
}
