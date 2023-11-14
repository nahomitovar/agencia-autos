import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConexionBackendService } from 'src/app/servicios/conexion-backend.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  constructor(public api: ConexionBackendService, public ref: DynamicDialogRef){}

  nombre:any;
  telefono:any;
  pass:any;
  rol:any;
  roles:any = [
    {nombre: 'Cliente', valor: 1},
    {nombre: 'Empleado', valor: 2},
    {nombre: 'Administrador', valor: 3},
  ]

  registro(){
    let params = {
      nombre: this.nombre,
      telefono: this.telefono,
      pass: this.pass,
      rol: parseInt(this.rol)
    }
    console.log(params)
    this.api.PostMethod(params, 'Usuarios/CrearUsuario').subscribe(y=>{
      if(y){
        this.ref.close();
      }
    });
  }

}
