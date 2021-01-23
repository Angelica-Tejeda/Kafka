import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibroService } from 'src/app/services/libro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
  providers: [LibroService]
})
export class BusquedaComponent implements OnInit {
  //posts: any;
  constructor(private location: Location, private formbuilder: FormBuilder, private libroService: LibroService,
    private router: Router) { }

  filterPost = '';

  posts = [
    {
      "src": "../../../../assets/img/principito.jpg",
      "titulo": "El principito",
      "autor": "Antoine de Saint-Exupéry"
    },
    {
      "src": "../../../../assets/img/metamorfosisPortada.jpg",
      "titulo": "La Metamorfosis",
      "autor": "Franz Kafka"
    },
    {
      "src": "../../../../assets/img/dracula.jpg",
      "titulo": "Drácula",
      "autor": "Bram Stoker"
    },
    {
      "src": "../../../../assets/img/cuervo.jpg",
      "titulo": "El cuervo",
      "autor": "Edgar Allan Poe"
    },
    {
      "src": "../../../../assets/img/resplandor.jpg",
      "titulo": "El resplandor",
      "autor": "Stephen King"
    }, {
      "src": "../../../../assets/img/caminante.jpg",
      "titulo": "El caminante y su sombra",
      "autor": "Friedrich Nietzsche"
    },
    {
      "src": "../../../../assets/img/goblet.jpg",
      "titulo": "Harry Potter y el cáliz de fuego",
      "autor": "J.K Rowling"
    },
    {
      "src": "../../../../assets/img/cianuro.jpg",
      "titulo": "Cianuro Espumoso",
      "autor": "Agatha Cristhie"
    },
    {
      "src": "../../../../assets/img/estudio-en-escarlata.jpg",
      "titulo": "Estudio en escarlata",
      "autor": "Arthur Conan Doyle"
    },
    {
      "src": "../../../../assets/img/inferno.jpg",
      "titulo": "Inferno",
      "autor": "Dan Brown"
    },
    {
      "src": "../../../../assets/img/psico.jpg",
      "titulo": "El psicoanalista",
      "autor": "John Katzenbach"
    },
    {
      "src": "../../../../assets/img/contacto.jpg",
      "titulo": "Contacto",
      "autor": "Carl Sagan"
    }
  ]
  /*
    busqueda(){
      this.posts= LibroService.get_libro_por_nombre();
  } */


  ngOnInit(): void {
  }

}
