import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent {

  constructor(public router: Router){}

  redirect($myParam: string = ''): void {
    const navigationDetails: string[] = ['/' + $myParam];
    this.router.navigate(navigationDetails);
  }

}
