import { Component, OnInit } from '@angular/core';

interface Producto{
    nombre:string;
    stock:number;
    fabricante:string;
    fechaVence:Date;
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {
  pestana:string = '';
  nombres: Array<string>=["Maria","Pedro","Edison","Alberto"]
  cargando:boolean = true;
  mostrarcuadrado:boolean = false;
  productos:Array<Producto> = [
    {
      nombre: 'Arroz',
      stock: 15,
      fabricante:'Diana',
      fechaVence:new Date('04/15/2020')
    },
    {
      nombre: 'Panela',
      stock: 18,
      fabricante:'CañaDulce',
      fechaVence:new Date('04/27/2020')
    },
    {
      nombre: 'Pescado',
      stock: 200,
      fabricante:'Mar Productos',
      fechaVence:new Date('04/15/2022')
    }
]
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=> {
         this.cargando = false
    }, 5000);
  }

  mostrarCargando(){
    this.cargando = !this.cargando;
  }

  cambiarpestana(pestana:string){
    this.pestana = pestana;
  }

  alternarfondo(){
    this.mostrarcuadrado = !this.mostrarcuadrado
  }

}
