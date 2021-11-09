import { Injectable } from '@angular/core';
import { Location } from './location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  locationList: Location[] = [
    {
      id: 1,
      name: 'Location One',
      description: 'Safe place',
      city: 'Chicago',
    },
    {
      id: 2,
      name: 'Location Two',
      description: 'Safe place',
      city: 'Chicago',
    },
    {
      id: 3,
      name: 'Location Three',
      description: 'Safe place',
      city: 'Chicago',
    },
  ];

  constructor() {}

  getLocations() {
    return this.locationList;
  }

  getLocationById(id: number) {
    for (let i = 0; i < this.locationList.length; i++) {
      if (this.locationList[i].id === id) {
        return this.locationList[i];
      }
    }
    return void 0;
  }
}
