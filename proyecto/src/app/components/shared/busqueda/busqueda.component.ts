import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
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

  constructor(private location:Location,private formbuilder:FormBuilder, private libroService:LibroService,
    private router: Router) { }

  filterPost = '';

  posts = [
    {
      "src": "../../../../assets/img/metamorfosisPortada.jpg",
      "titulo": "El principito",
      "autor": "Antoine de Saint-Exupéry"
    },
    {
      "src": "../../../../assets/img/metamorfosisPortada.jpg",
      "titulo": "La Metamorfosis",
      "autor": "Franz Kafka"
    },
    {
      "src": "../../../../assets/img/metamorfosisPortada.jpg",
      "titulo": "Drácula",
      "autor": "Bram Stoker"
    },
    {
      "src": "../../../../assets/img/metamorfosisPortada.jpg",
      "titulo": "El cuervo",
      "autor": "Edgar Allan Poe"
    },
    {
      "src": "../../../../assets/img/metamorfosisPortada.jpg",
      "titulo": "El resplandor",
      "autor": "Stephen King"
    },{
      "src": "../../../../assets/img/metamorfosisPortada.jpg",
      "titulo": "Contacto",
      "autor": "Carl Sagan"
    }
  ]

  ngOnInit(): void {
  }

}
