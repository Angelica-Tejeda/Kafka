import { SeccionService } from './../../services/seccion.service';
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
  id:any;
  generos: Genero[] = [new Genero("Terror",1), new Genero("Comedia",2), new Genero("Policial",3)];
  clasificacion = ["Todo Público","Mayores de 18 años"];
  idioma = ["Español","Ingles","Frances"];
  url="../../assets/img/metamorfosisPortada.jpg";



  constructor(private location:Location,private formbuilder:FormBuilder, private libroService:LibroService,
    private router: Router, private seccionS:SeccionService) { }


  ngOnInit(): void {
    this.libroForm = this.formbuilder.group({
      titulo: ['', Validators.required],
      sinopsis: [''],
      genero: ['', Validators.required],
      clasificacion: ['', Validators.required],
      idioma: ['', Validators.required],
    })


  }


  onSubmit(data: any){
      console.log(data);
      var libro = {
        "titulo": data.titulo,
        "sinopsis": data.sinopsis,
        "genero": data.genero,
        "adulto": data.genero==="Todo Público"? 0 : 1,
        "escritor": 5,
        "exclusivo": 0,
        "anio_publicacion": (new Date()).getFullYear()


      }
      this.libroService.sendLibro(libro).subscribe(data => {
        if(data){
          let res = JSON.parse(JSON.stringify(data));
          this.id=data.id;
          console.log(res.id);
          console.log(data);
          const seccion = {
            "obraId" : data.id ,
            "orden": 0
          }
          console.log(seccion);
          this.seccionS.createSection(seccion).subscribe(data=>console.log(data))
          this.router.navigate(["/vistaEscritura",this.id]);

        }
      })



      // console.log(this.id);
      // if(this.id!=""){
      //   this.seccion.send_seccion("Borrador",Number(this.id),"","1");
      // }

      this.libroForm.reset();

  }

  atras(){
    this.location.back();
  }

}
