import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{

  usuario:any;

  ngOnInit(): void {
      this.usuario = localStorage.getItem("Usuario")
      console.log(this.usuario)
  }

}
 