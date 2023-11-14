import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionBackendService } from 'src/app/servicios/conexion-backend.service';

@Component({
  selector: 'app-tab-status-servicios',
  templateUrl: './tab-status-servicios.component.html',
  styleUrls: ['./tab-status-servicios.component.scss']
})
export class TabStatusServiciosComponent implements OnInit{

  constructor(public api:ConexionBackendService, public router: Router){}

  items:any = [
    {
      tooltipOptions: {
        tooltipLabel: 'Cerrar sesión'
      },
      icon: 'pi pi-sign-out',
      command: () =>{
        localStorage.removeItem("Usuario")
        this.redirect('inicio-sesion')
      }
    }
  ];

  redirect($myParam: string = ''): void {
    const navigationDetails: string[] = ['/' + $myParam];
    this.router.navigate(navigationDetails);
  }

  ngOnInit(): void {
    this.api.GetMethod('Usuarios/ObtenerUsuarios').subscribe(y=>{
      console.log(y)
      this.opcionesDropUsuarios = y;
    })
  }

  opcionesDropUsuarios:any;
  nombre:any;
  telefono:any;
  pass:any;
  servicios:any;
  serviciosDisponibles:boolean = false;

  ConsultarServicios(){
    let params = {
      id: this.nombre,
      telefono: this.telefono,
      pass: this.pass
    };
    console.log()
    this.api.PostMethod(params, 'Servicios/ObtenerServiciosPorUsuario').subscribe(y=>{
      if(y){
        this.serviciosDisponibles = true;
        console.log(y)
        this.servicios = y;
      }else{
        alert("No hay Servicios Disponibles")
      }
    });
  }

}
