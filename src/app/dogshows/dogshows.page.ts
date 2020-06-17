import { Component, OnInit } from '@angular/core';
import { DogShow } from './dogshow.model';

import { DogshowsService } from './dogshows.service';

@Component({
  selector: 'app-dogshows',
  templateUrl: './dogshows.page.html',
  styleUrls: ['./dogshows.page.scss'],
})
export class DogshowsPage implements OnInit {
  dogshows: DogShow[];

  constructor(private dogshowService: DogshowsService) { }

  ngOnInit() {
    this.dogshows = this.dogshowService.getDogshows();
  }

}
