import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'inicio-sesion', component: InicioSesionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
