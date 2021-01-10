import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from './libro.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  coleccion: Libro[] = [new Libro("Harry Potter","Insomnio","Mayores de 12 años"), new Libro("IT","Terror","Mayores de 18 años"), new Libro("Pienso en el final","Ficcion","Mayores de 12 años"), new Libro("La Metamorfosis","Ciencia Ficcion","Mayores de 18 años")];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  editar(){
      this.router.navigate(['vistaEscritura']);
  }

}
