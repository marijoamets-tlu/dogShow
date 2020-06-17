import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogshowPage } from './dogshow.page';

const routes: Routes = [
  {
    path: '',
    component: DogshowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogshowPageRoutingModule {}
