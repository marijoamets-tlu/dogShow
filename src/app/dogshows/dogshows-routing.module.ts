import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogshowsPage } from './dogshows.page';

const routes: Routes = [
  {
    path: '',
    component: DogshowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogshowsPageRoutingModule {}
