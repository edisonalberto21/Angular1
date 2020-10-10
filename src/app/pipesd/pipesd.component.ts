import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesd',
  templateUrl: './pipesd.component.html',
  styleUrls: ['./pipesd.component.scss']
})
export class PipesdComponent implements OnInit {

  titulo:string="Titulo Prueba";
  dinero:number=2400;
  ganancias:number=0.54;
  fecha:Date= new Date('06-1-2019')
  textlargo:string='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam rerum nobis vero maiores commodi praesentium facilis sequi ipsa alias. Ab nemo aut voluptatem autem magnam quidem cum animi deserunt facere!'
  constructor() { }


  ngOnInit(): void {
  }
  

}
