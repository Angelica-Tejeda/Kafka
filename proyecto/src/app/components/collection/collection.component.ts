import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibroService } from 'src/app/services/libro.service';
import { Libro } from './libro.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  coleccion: Libro[] = [new Libro("Harry Potter","Insomnio","Mayores de 12 años"), new Libro("IT","Terror","Mayores de 18 años"), new Libro("Pienso en el final","Ficcion","Mayores de 12 años"), new Libro("La Metamorfosis","Ciencia Ficcion","Mayores de 18 años")];

  constructor(private router: Router, private libros:LibroService) {

  }

  ngOnInit(): void {
    this.libros.getCollection().subscribe((res:any)=>{
      if(res){
        for(let libro of res){
          console.log(libro.titulo,libro.genero,libro.clasificacion);
          this.coleccion.push(new Libro(libro.titulo,libro.genero,libro.clasificacion))
        }
      }

    });
  }


  editar(){
      this.router.navigate(['vistaEscritura']);
  }

}
