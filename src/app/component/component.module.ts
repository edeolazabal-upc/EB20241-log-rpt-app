import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgChartsModule } from 'ng2-charts';
import { Reportes01Component } from './reportes01/reportes01.component';
import { HomeComponent } from './home/home.component';
import { Reportes02Component } from './reportes02/reportes02.component';


@NgModule({
  declarations: [
    Reportes01Component,
    HomeComponent,
    Reportes02Component,

  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    HttpClientModule,
    MatListModule,
    MatDatepickerModule,
    MatButtonModule,
    MatTableModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    NgChartsModule
    ],
})
export class ComponentModule {}
