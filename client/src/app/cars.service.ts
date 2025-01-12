import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  
  constructor() { }

  carsServiceUrlBase = "http://localhost:1440/api/listcars";
  carsServiceUrl = this.carsServiceUrlBase;

  async getCarsList(make: string): Promise<Car[]> {
    if(make !== "") {
      this.carsServiceUrl = this.carsServiceUrlBase + "?make=" + encodeURIComponent(make);
    }
    if(make === ""){
      this.carsServiceUrl = this.carsServiceUrlBase;
    }
    const data = await fetch(this.carsServiceUrl);
    return await data.json() ?? [];
  }
}
