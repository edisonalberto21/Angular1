import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticulosT } from '../models/articulos';



@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {

  articulos:Array<ArticulosT> = new Array<ArticulosT>();
  
  constructor(private ruta:Router) { }

  ngOnInit(): void {
    this.articulos.push(
      {nombre:'Televisor LG',descripcion:'Televisor de 24 pulgadas',precio:12000000, stock:10,precioMayorita:1000},
      {nombre:'Celular',descripcion:'SmarthPhone  Alta Gama',precio:2100000, stock:10,precioMayorita:1000},
      {nombre:'Computador',descripcion:'HP 500 Ram',precio:4500000, stock:10,precioMayorita:1000}
    )
  }

  pasarParametro(articuloR:ArticulosT){
    console.log(articuloR)
    this.ruta.navigate(['articuloDetalle',{articulo:JSON.stringify(articuloR)}])
  }

}
