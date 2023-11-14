import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { HttpClient } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { RegistroComponent } from './componentes/registro/registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { TabCatalogoComponent } from './componentes/inicio/tabs/tab-catalogo/tab-catalogo.component';
import { TabStatusServiciosComponent } from './componentes/inicio/tabs/tab-status-servicios/tab-status-servicios.component';
import { DashboardComponent } from './componentes/inicio/tabs/dashboard/dashboard.component';
import { NuevoServicioComponent } from './componentes/inicio/tabs/nuevo-servicio/nuevo-servicio.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SpeedDialModule } from 'primeng/speeddial';
import { AgregarRefaccionesComponent } from './componentes/inicio/tabs/tab-catalogo/components/agregar-refacciones/agregar-refacciones.component';
import { ChartModule } from 'primeng/chart';
import { ActualizarEstatusComponent } from './componentes/inicio/tabs/nuevo-servicio/components/actualizar-estatus/actualizar-estatus.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InicioSesionComponent,
    RegistroComponent,
    TabCatalogoComponent,
    TabStatusServiciosComponent,
    DashboardComponent,
    NuevoServicioComponent,
    AgregarRefaccionesComponent,
    ActualizarEstatusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    TabViewModule,
    TableModule,
    CardModule,
    InputTextareaModule,
    SpeedDialModule,
    ChartModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
