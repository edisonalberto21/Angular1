import { Component, OnInit } from '@angular/core';

class Alumno{
  nombre:string;
  apellido:string;
  imagen:string;

  constructor(){
    this.nombre = this.nombre;
    this.apellido = this.apellido;
    this.imagen = this.imagen;
  }
}

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})
export class EjemploComponent implements OnInit {

  alumno:Alumno = new Alumno();
  listadoAlumnos:Array<Alumno> = new Array<Alumno>();
  constructor() { }

  ngOnInit(): void {
  }

agregar(){
  this.listadoAlumnos.push({
    nombre: this.alumno.nombre,
    apellido: this.alumno.apellido,
    imagen: this.alumno.imagen
  })
  this.alumno.nombre = '';
  this.alumno.apellido = '';
  this.alumno.imagen  = '';

  console.log(this.listadoAlumnos)
}
}
