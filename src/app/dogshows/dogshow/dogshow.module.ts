import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DogshowPageRoutingModule } from './dogshow-routing.module';

import { DogshowPage } from './dogshow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DogshowPageRoutingModule
  ],
  declarations: [DogshowPage]
})
export class DogshowPageModule {}
