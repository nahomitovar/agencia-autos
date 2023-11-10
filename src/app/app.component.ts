import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(public router: Router){}

  title = 'agencia-autos';

  ngOnInit(): void {
      this.redirect('inicio-sesion')
  }

  redirect($myParam: string = ''): void {
    const navigationDetails: string[] = ['/' + $myParam];
    this.router.navigate(navigationDetails);
  }

}
