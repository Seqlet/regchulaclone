import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'regis',
    loadChildren: () => import('./pages/regis/regis.module').then( m => m.RegisPageModule)
  },
  {
    path: 'regisout',
    loadChildren: () => import('./pages/regisout/regisout.module').then( m => m.RegisoutPageModule)
  },
  {
    path: 'grade',
    loadChildren: () => import('./pages/grade/grade.module').then( m => m.GradePageModule)
  },
  {
    path: 'withdraw',
    loadChildren: () => import('./pages/withdraw/withdraw.module').then( m => m.WithdrawPageModule)
  },
  {
    path: 'stdinfo',
    loadChildren: () => import('./pages/stdinfo/stdinfo.module').then( m => m.StdinfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
