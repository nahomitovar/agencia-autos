import { Component, OnInit } from '@angular/core';
import { ConexionBackendService } from 'src/app/servicios/conexion-backend.service';

@Component({
  selector: 'app-actualizar-estatus',
  templateUrl: './actualizar-estatus.component.html',
  styleUrls: ['./actualizar-estatus.component.scss']
})
export class ActualizarEstatusComponent implements OnInit{

  constructor(public api: ConexionBackendService){

  }

  servicio:any;
  estatusSeleccionado:any;
  servicioSeleccionado:any;
  estatus:any = [
    {nombre: 'En proceso'},
    {nombre: 'Terminado'}
  ]

  ngOnInit(): void {
    this.ObtenerServicios();
  }

  ObtenerServicios(){
    this.api.GetMethod('Servicios/ObtenerServicios').subscribe(y=>{
      this.servicio = y;
    });
  }

  GuardarEstatus(){
    let params = {
      idServicio: parseInt(this.servicioSeleccionado),
      estatus: this.estatusSeleccionado
    }
    this.api.PostMethod(params, 'Servicios/ActualizarEstatus').subscribe(y=>{
      y ? alert('Estatus actualizado') : alert('Error')
    })
  }

}
