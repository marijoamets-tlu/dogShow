import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'dogshows',
    children: [
      {
        path: '',
        loadChildren: () => import('./dogshows/dogshows.module').then( m => m.DogshowsPageModule)
      },
      {
        path: ':dogshowId',
        loadChildren: () => import('./dogshows/dogshow/dogshow.module').then( m => m.DogshowPageModule)
      }
    ]
    
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
