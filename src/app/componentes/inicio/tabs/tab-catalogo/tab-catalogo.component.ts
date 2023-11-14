import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConexionBackendService } from 'src/app/servicios/conexion-backend.service';
import { AgregarRefaccionesComponent } from './components/agregar-refacciones/agregar-refacciones.component';

@Component({
  selector: 'app-tab-catalogo',
  templateUrl: './tab-catalogo.component.html',
  styleUrls: ['./tab-catalogo.component.scss'],
  providers: [DialogService]
})
export class TabCatalogoComponent implements OnInit{

  constructor(public api: ConexionBackendService,public router: Router, public dialogService: DialogService){}

  modal: DynamicDialogRef = new DynamicDialogRef;
  nombre:any;
  descripcion:any;
  refacciones:any;
  automoviles:any;
  marca:any;
  modelo: any;
  items:any = [
    {
      tooltipOptions: {
        tooltipLabel: 'Cargar Refacciones'
      },
      icon: 'pi pi-cloud-upload',
      command: () =>{
        this.abrirModal();
      }
    },
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

  ngOnInit(): void {
    this.ObtenerRefacciones();
    this.ObtenerAutomoviles();
  }

  redirect($myParam: string = ''): void {
    const navigationDetails: string[] = ['/' + $myParam];
    this.router.navigate(navigationDetails);
  }

  ObtenerRefacciones(){
    this.api.GetMethod('Refacciones/ObtenerRefacciones').subscribe(y=>{
      this.refacciones = y;
    });
  }

  ObtenerAutomoviles(){
    this.api.GetMethod('Automoviles/ObtenerTodosAutos').subscribe(y=>{
      this.automoviles = y;
    });
  }

  crearNuevaRefaccion(){
    let params = {
      nombre: this.nombre,
      descripcion: this.descripcion
    };
    this.api.PostMethod(params, 'Refacciones/CrearRefaccion').subscribe(y=>{
      y ? alert('Refacción ingresada correctamente.') : alert('Error al ingresar la refacción, intente de nuevo.')
      this.ObtenerRefacciones();
      this.nombre = '';
      this.descripcion = '';
    });
  }

  crearNuevoAuto(){
    let params = {
      marca: this.marca,
      modelo: this.modelo
    };
    this.api.PostMethod(params, 'Automoviles/CrearAutomovil').subscribe(y=>{
      y ? alert('Auto ingresado correctamente.') : alert('Error al ingresar el auto, intente de nuevo.')
      this.ObtenerAutomoviles();
      this.marca = '';
      this.modelo = '';
    });
  }

  abrirModal(){
    this.modal = this.dialogService.open(AgregarRefaccionesComponent, {
      header: "Registrar Usuario",
      width: '75%',
      contentStyle: {"overflow": "auto"},
      baseZIndex: 10000,
      maximizable: true
    })
  }

}
