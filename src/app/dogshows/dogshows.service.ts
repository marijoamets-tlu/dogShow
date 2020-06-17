import { Injectable } from '@angular/core';
import { DogShow } from './dogshow.model';

@Injectable({
  providedIn: 'root'
})
export class DogshowsService {
  private dogshows: DogShow[] = [
    {
      id: '1',
      title: 'Narva näitus',
      location: 'Rakvere 22, Narva',
      startdate: new Date(2021, 1, 15, 10, 0),
      enddate: new Date(2021, 1, 17, 18, 0)
    },
    {
      id: '2',
      title: 'Tartu näitus',
      location: 'Kreutzwaldi 60, Tartu',
      startdate: new Date(2021, 3, 17, 10, 0),
      enddate: new Date(2021, 3, 18, 18, 0)
    }
  ];

  constructor() { }

  getDogshows () {
    return [...this.dogshows]
  }

  getDogshow (dogshowId: String) {
    return {...this.dogshows.find(dogshow => {
      return dogshow.id === dogshowId;
    })};
  }
}
