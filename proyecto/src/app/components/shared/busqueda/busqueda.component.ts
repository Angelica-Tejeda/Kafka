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
      "titulo": "Pato",
      "autor": "Franz Kafka"
    },
    {
      "src": "../../../../assets/img/metamorfosisPortada.jpg",
      "titulo": "Perro",
      "autor": "Franz Kafka"
    },
    {
      "src": "../../../../assets/img/metamorfosisPortada.jpg",
      "titulo": "Gato",
      "autor": "Franz Kafka"
    },
    {
      "src": "../../../../assets/img/metamorfosisPortada.jpg",
      "titulo": "Pollo",
      "autor": "Franz Kafka"
    },
    {
      "src": "../../../../assets/img/metamorfosisPortada.jpg",
      "titulo": "Caballo",
      "autor": "Franz Kafka"
    },{
      "src": "../../../../assets/img/metamorfosisPortada.jpg",
      "titulo": "Conejo",
      "autor": "Franz Kafka"
    }
  ]

  ngOnInit(): void {
  }

}
