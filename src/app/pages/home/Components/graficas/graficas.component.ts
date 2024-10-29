import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-graficas',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './graficas.component.html',
  styleUrl: './graficas.component.css'
})
export class GraficasComponent implements OnInit{
  data1: any;
  options1: any;

  data2: any;
  options2: any;

  data3: any;
  options3: any;

  ngOnInit() {
    this.setupChart1(30); 
    this.setupChart2(50);
    this.setupChart3(70); 
  }

  setupChart1(porcentaje: number) {
    const restante = 100 - porcentaje;
    this.data1 = {
      labels: ['Porcentaje', 'Restante'],
      datasets: [
        {
          data: [porcentaje, restante],
          backgroundColor: ['#FF6384', '#D3D3D3'],
          hoverBackgroundColor: ['#FF4C61'],
        },
      ],
    };

    this.options1 = {
      cutout: '60%',
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem: any) => {
              const value = tooltipItem.dataset.data[tooltipItem.dataIndex];
              return `${value}%`;
            },
          },
        },
      },
    };
  }

  setupChart2(porcentaje: number) {
    const restante = 100 - porcentaje;
    this.data2 = {
      labels: ['Porcentaje', 'Restante'],
      datasets: [
        {
          data: [porcentaje, restante],
          backgroundColor: ['#36A2EB', '#D3D3D3'],
          hoverBackgroundColor: ['#2A8CC2'],
        },
      ],
    };

    this.options2 = {
      cutout: '60%',
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem: any) => {
              const value = tooltipItem.dataset.data[tooltipItem.dataIndex];
              return `${value}%`;
            },
          },
        },
      },
    };
  }

  setupChart3(porcentaje: number) {
    const restante = 100 - porcentaje;
    this.data3 = {
      labels: ['Porcentaje', 'Restante'],
      datasets: [
        {
          data: [porcentaje, restante],
          backgroundColor: ['#FFCE56', '#D3D3D3'],
          hoverBackgroundColor: ['#FFC107'],
        },
      ],
    };

    this.options3 = {
      cutout: '60%',
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem: any) => {
              const value = tooltipItem.dataset.data[tooltipItem.dataIndex];
              return `${value}%`;
            },
          },
        },
      },
    };
  }
}
