import { Component, OnInit } from '@angular/core';
import { Genero } from './genero.model';

@Component({
  selector: 'app-formlibro',
  templateUrl: './formlibro.component.html',
  styleUrls: ['./formlibro.component.css']
})
export class FormlibroComponent implements OnInit {
  generos: Genero[] = [new Genero("Terror",1), new Genero("Comedia",2), new Genero("Policial",3)];
  clasificacion = ["Todo Público","Mayores de 12 años","Mayores de 18 años"];
  idioma = ["Español","Ingles","Frances"];
  url="../../assets/img/metamorfosisPortada.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
