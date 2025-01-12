import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  
  constructor() { }

  carsServiceUrl = "http://localhost:1440/api/listcars"

  async getCarsList(make: string): Promise<Car[]> {
    if(make !== "") {
      this.carsServiceUrl = this.carsServiceUrl + "?make=" + encodeURIComponent(make);
    }
    const data = await fetch(this.carsServiceUrl);
    return await data.json() ?? [];
  }
}
