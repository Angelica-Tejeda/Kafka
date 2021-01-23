import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SeccionService } from 'src/app/services/seccion.service';
import { Seccion } from './seccion.model';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-vista-escritura',
  templateUrl: './vista-escritura.component.html',
  styleUrls: ['./vista-escritura.component.css']
})
export class VistaEscrituraComponent implements OnInit {
  id: number = 0;
  secciones: Seccion[]=[];
  tituloarea:string="";
  contenidoarea:string="";
  titulolibro:string="";
  constructor(private location:Location,private route: ActivatedRoute,
    private router: Router, private seccion:SeccionService, private libro: LibroService) { }

  ngOnInit(): void {

    this.id=Number(this.route.snapshot.paramMap.get("id"));
    console.log("Este es el id "+ this.id);
    this.get_secciones();
    this.get_libro();
  }

  get_secciones(){
      this.seccion.get_seccion_id(this.id).subscribe(data=>{
          if(data){
            for(let sec of data){
              console.log(sec);
              this.secciones.push(new Seccion(sec.titulo,sec.contenido));
              this.tituloarea=sec.titulo;
              this.contenidoarea=sec.contenido;
            }
          }else{
            console.log("no se trajeron las secciones\n");
          }

      });
  }

  get_libro(){
    this.libro.get_libro(this.id).subscribe(libro => {
      if(libro){
        this.titulolibro=libro[0].titulo;
        console.log(libro);
      }else{
        console.log("No se trajo info");
      }
    })
  }

  save_libro(contenido:string, titulo:string){
    console.log("save libro");

    var current = this.router.url;
    this.router.navigate([current]);
    this.seccion.update_sect(this.id,titulo,contenido)

  }

  atras(){
    this.location.back();
  }

}
