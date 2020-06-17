import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogshowsService } from '../dogshows.service';
import { DogShow } from '../dogshow.model';

@Component({
  selector: 'app-dogshow',
  templateUrl: './dogshow.page.html',
  styleUrls: ['./dogshow.page.scss'],
})
export class DogshowPage implements OnInit {
  selectedDogshow: DogShow;

  constructor(private activatedRoute: ActivatedRoute, private dogshowsService: DogshowsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('dogshowId')) {
        return;
      }
      const dogshowId = paramMap.get('dogshowId');
      this.selectedDogshow = this.dogshowsService.getDogshow(dogshowId);
    });
  }

}
