import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionBackendService } from 'src/app/servicios/conexion-backend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(public router: Router, public api: ConexionBackendService) {}

  ngOnInit(): void {
    this.ObtenerDatosDash();
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }

  basicOptions: any;
  data:any;
  items: any = [
    {
      tooltipOptions: {
        tooltipLabel: 'Cerrar sesión',
      },
      icon: 'pi pi-sign-out',
      command: () => {
        localStorage.removeItem('Usuario');
        this.redirect('inicio-sesion');
      },
    },
  ];

  values:any = [];
  labels:any = [];

  redirect($myParam: string = ''): void {
    const navigationDetails: string[] = ['/' + $myParam];
    this.router.navigate(navigationDetails);
  }

  ObtenerDatosDash(){
    this.api.GetMethod('Dashboard/ObtenerServicios').subscribe(y=>{
      y.forEach((x:any)=>{
        this.values.push(x.total)
        this.labels.push(x.ingreso)
      });
      this.data = {
        labels: this.labels,
        datasets: [
          {
            label: 'Servicios ingresados',
            data: this.values,
            backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
            borderWidth: 1
          }
        ]
      };
    })
  }

}
