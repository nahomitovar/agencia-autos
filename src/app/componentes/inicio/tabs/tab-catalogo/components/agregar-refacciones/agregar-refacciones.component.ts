import { Component, OnInit } from '@angular/core';
import { ConexionBackendService } from 'src/app/servicios/conexion-backend.service';

@Component({
  selector: 'app-agregar-refacciones',
  templateUrl: './agregar-refacciones.component.html',
  styleUrls: ['./agregar-refacciones.component.scss']
})
export class AgregarRefaccionesComponent implements OnInit{

  constructor(public api: ConexionBackendService){}

  refaccion:any;
  refaccionSeleccionado:any;
  servicio:any;
  servicioSeleccionado:any;

  ngOnInit(): void {
    this.ObtenerRefacciones();
    this.ObtenerServicios();
  }

  ObtenerRefacciones(){
    this.api.GetMethod('Refacciones/ObtenerRefacciones').subscribe(y=>{
      this.refaccion = y;
    });
  }
  ObtenerServicios(){
    this.api.GetMethod('Servicios/ObtenerServicios').subscribe(y=>{
      this.servicio = y;
    });
  }

  GuardarRefaccionServicio(){
    let params = {
      idServicio: this.servicioSeleccionado,
      id: this.refaccionSeleccionado
    }
    this.api.PostMethod(params, 'RefaccionesServicios/AgregarRefaccionServicio').subscribe(y=>{
      y ? alert('Refaccion agregada') : alert('Error al guardar refaccion en el servicio')
    })
  }

}
