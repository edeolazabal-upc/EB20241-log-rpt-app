import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { Reporte02DTO } from 'src/app/model/Reporte02DTO';
import { Reporte01Service } from 'src/app/service/reporte01.service';

@Component({
  selector: 'app-reportes02',
  templateUrl: './reportes02.component.html',
  styleUrls: ['./reportes02.component.css'],
})
export class Reportes02Component implements OnInit {
  dataSource: MatTableDataSource<Reporte02DTO> = new MatTableDataSource();
  displayedColumns: string[] = ['usuario', 'suma'];
  constructor(private r: Reporte01Service) {}
  ngOnInit(): void {
    this.r.getSumar().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
