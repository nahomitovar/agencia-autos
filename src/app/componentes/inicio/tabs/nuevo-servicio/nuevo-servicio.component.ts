import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConexionBackendService } from 'src/app/servicios/conexion-backend.service';
import { ActualizarEstatusComponent } from './components/actualizar-estatus/actualizar-estatus.component';

@Component({
  selector: 'app-nuevo-servicio',
  templateUrl: './nuevo-servicio.component.html',
  styleUrls: ['./nuevo-servicio.component.scss'],
  providers: [DialogService]
})
export class NuevoServicioComponent implements OnInit{

  constructor(public api: ConexionBackendService, public router: Router, public dialogService: DialogService){}

  modal: DynamicDialogRef = new DynamicDialogRef;
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
    },
    {
      tooltipOptions: {
        tooltipLabel: 'Actualizar estatus'
      },
      icon: 'pi pi-upload',
      command: () =>{
        this.abrirModal();
      }
    }
  ];

  redirect($myParam: string = ''): void {
    const navigationDetails: string[] = ['/' + $myParam];
    this.router.navigate(navigationDetails);
  }

  automovil:any;
  usuario:any;

  usuarioSeleccionado: any;
  automovilSeleccionado: any;

  ngOnInit(): void {
    this.api.GetMethod('Usuarios/ObtenerUsuarios').subscribe(y=>{
      console.log(y)
      this.usuario = y
    })
    this.api.GetMethod('Automoviles/ObtenerAutos').subscribe(y=>{
      console.log(y)
      this.automovil = y
    })
  }

  registrarNuevoServicio(){
    let params = {
      idUsuario: parseInt(this.usuarioSeleccionado),
      idAutomovil: parseInt(this.automovilSeleccionado)
    }
    console.log(params)
    this.api.PostMethod(params, 'Servicios/CrearNuevoServicio').subscribe(y=>{
      y ? alert('Registro exitoso') : alert('Error en el registro, intente de nuevo.')
    })
  }

  abrirModal(){
    this.modal = this.dialogService.open(ActualizarEstatusComponent, {
      header: "Actualizar estatus servicio",
      width: '75%',
      contentStyle: {"overflow": "auto"},
      baseZIndex: 10000,
      maximizable: true
    })
  }

}
