import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Reportes01Component } from './reportes01/reportes01.component';
import { HomeComponent } from './home/home.component';
import { Reportes02Component } from './reportes02/reportes02.component';

const routes: Routes = [
  {
    path: 'reporte01',
    component: Reportes01Component,
  },
  {
    path: 'homes',
    component: HomeComponent,
  },{
    path: 'reporte02',
    component: Reportes02Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule {}
