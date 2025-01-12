import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  
  constructor() { }

  carsServiceUrl: string = "http://localhost:1440/api/listcars"

  async getCarsList(make: string): Promise<Car[]> {
    const requestURL: string = this.carsServiceUrl + "?make=" + encodeURIComponent(make);
    const data = await fetch(requestURL);
    return await data.json() ?? [];
  }
}
