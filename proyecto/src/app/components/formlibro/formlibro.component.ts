import { Component, OnInit } from '@angular/core';
import { Genero } from './genero.model';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibroService } from 'src/app/services/libro.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formlibro',
  templateUrl: './formlibro.component.html',
  styleUrls: ['./formlibro.component.css'],
  providers: [LibroService]
})
export class FormlibroComponent implements OnInit {
  libroForm: any;
  generos: Genero[] = [new Genero("Terror",1), new Genero("Comedia",2), new Genero("Policial",3)];
  clasificacion = ["Todo Público","Mayores de 12 años","Mayores de 18 años"];
  idioma = ["Español","Ingles","Frances"];
  url="../../assets/img/metamorfosisPortada.jpg";



  constructor(private location:Location,private formbuilder:FormBuilder, private libroService:LibroService,
    private router: Router) { }


  ngOnInit(): void {
    this.libroForm = this.formbuilder.group({
      titulo: ['', Validators.required],
      sipnosis: [''],
      genero: ['', Validators.required],
      clasificacion: ['', Validators.required],
      idioma: ['', Validators.required],
    })
  }


  onSubmit(data: any){
      console.log(data);
      this.libroService.sendLibro(data.titulo,data.sipnosis,data.genero,data.clasificacion,data.idioma);
      this.libroForm.reset();
      this.router.navigate(['vistaEscritura']);
  }

  atras(){
    this.location.back();
  }

}
