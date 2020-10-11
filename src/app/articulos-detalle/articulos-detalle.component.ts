import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosT } from '../models/articulos';

@Component({
  selector: 'app-articulos-detalle',
  templateUrl: './articulos-detalle.component.html',
  styleUrls: ['./articulos-detalle.component.scss']
})
export class ArticulosDetalleComponent implements OnInit {

  articulo:ArticulosT
  constructor(private ruta:ActivatedRoute) { }

  ngOnInit(): void {
   this.articulo = JSON.parse(this.ruta.snapshot.params.articulo);
   
  }

}
