import { ActiveTab } from './core/interfaces/enum';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    data: {
      hasTab: false
    }
  },
  {
    path: 'regis',
    loadChildren: () => import('./pages/regis/regis.module').then( m => m.RegisPageModule),
    data: {
      hasTab: true,
      activeTab: ActiveTab.regis
    }
  },
  {
    path: 'regisout',
    loadChildren: () => import('./pages/regisout/regisout.module').then( m => m.RegisoutPageModule),
    data: {
      hasTab: true,
      activeTab: ActiveTab.regisOutcome
    }
  },
  {
    path: 'grade',
    loadChildren: () => import('./pages/grade/grade.module').then( m => m.GradePageModule),
    data: {
      hasTab: true,
      activeTab: ActiveTab.grade
    }
  },
  {
    path: 'withdraw',
    loadChildren: () => import('./pages/withdraw/withdraw.module').then( m => m.WithdrawPageModule),
    data: {
      hasTab: true,
      activeTab: ActiveTab.withdraw
    }
  },
  {
    path: 'stdinfo',
    loadChildren: () => import('./pages/stdinfo/stdinfo.module').then( m => m.StdinfoPageModule),
    data: {
      hasTab: true,
      activeTab: ActiveTab.studentInfo
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
