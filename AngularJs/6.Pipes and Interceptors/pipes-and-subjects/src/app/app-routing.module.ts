import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoFound404Component } from './no-found404/no-found404.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    component: HomeComponent
  },
  //export Lazy-routing module from the lazy.module and import in app.module
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule)
  },
  { path: '**', component: NoFound404Component }

];

// can define preloadingStrategy, enableTracing and ...
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    //preloadingStrategy: PreloadAllModules",
    //enableTracing:true -> to debug redirect and routing in general
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
