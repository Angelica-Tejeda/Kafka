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
  coleccion: Libro[] = [new Libro("Harry Potter y el cáliz de fuego","Literatura fantástica","Mayores de 12 años","../../../assets/img/goblet.jpg"), new Libro("El resplandor","Terror","Mayores de 18 años","../../../assets/img/resplandor.jpg"), new Libro("Contacto","Ciencia ficción","Mayores de 12 años","../../../assets/img/contacto.jpg"), new Libro("La Metamorfosis","Ciencia Ficcion","Todo público","../../../assets/img/metamorfosisPortada.jpg")];

  constructor(private router: Router, private libros:LibroService) {

  }

  ngOnInit(): void {
    this.libros.getCollection().subscribe((res:any)=>{
      if(res){
        for(let libro of res){
          console.log(libro.titulo,libro.genero,libro.clasificacion);
          this.coleccion.push(new Libro(libro.titulo,libro.genero,libro.clasificacion,libro.imgSource))
        }
      }

    });
  }


  editar(){
      this.router.navigate(['vistaEscritura']);
  }

}
