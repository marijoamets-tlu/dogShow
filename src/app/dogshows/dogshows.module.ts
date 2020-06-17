import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DogshowsPageRoutingModule } from './dogshows-routing.module';

import { DogshowsPage } from './dogshows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DogshowsPageRoutingModule
  ],
  declarations: [DogshowsPage]
})
export class DogshowsPageModule {}
