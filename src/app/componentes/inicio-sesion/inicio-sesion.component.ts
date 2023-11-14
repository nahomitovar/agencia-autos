import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionBackendService } from 'src/app/servicios/conexion-backend.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
  providers: [DialogService]
})
export class InicioSesionComponent implements OnInit{

  constructor(public router: Router, public api: ConexionBackendService, public dialogService: DialogService){}

  modal: DynamicDialogRef = new DynamicDialogRef;
  telefono: any;
  pass: any;

  ngOnInit(): void {
      this.api.GetMethod('Usuarios/ObtenerUsuarios').subscribe(x=>{
        console.log("usuarios", x);
      })
  }

  redirect($myParam: string = ''): void {
    const navigationDetails: string[] = ['/' + $myParam];
    this.router.navigate(navigationDetails);
  }

  iniciarSesion(){
    let params = {
      telefono: this.telefono,
      pass: this.pass
    }
    this.api.PostMethod(params, 'Usuarios/IniciarSesion').subscribe(y=>{
      if(y.id > 0){
        localStorage.setItem("Usuario", y.rol.toString())
        console.log(localStorage.getItem("Usuario"))
        this.redirect('inicio')
      }else{
        alert('error, credenciales invalidas!')
      }
    })
  }

  abrirModal(){
    this.modal = this.dialogService.open(RegistroComponent, {
      header: "Registrar Usuario",
      width: '75%',
      contentStyle: {"overflow": "auto"},
      baseZIndex: 10000,
      maximizable: true
    })
  }

}
