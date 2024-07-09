import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { Reporte01Service } from 'src/app/service/reporte01.service';

@Component({
  selector: 'app-reportes01',
  templateUrl: './reportes01.component.html',
  styleUrls: ['./reportes01.component.css']
})
export class Reportes01Component  implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];
  constructor(private r: Reporte01Service) {}
  ngOnInit(): void {
    this.r.getContar().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.usuario);
      this.barChartData = [
        {
          data: data.map((item) => item.cantidad),
          label:'Número de gastos de viaje',
          backgroundColor:'rgba(244, 67, 54, 0.5)' // 'rgba(0,0,255,0.5)'
        },
      ];
    });
  }
}

