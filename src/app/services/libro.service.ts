import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http : HttpClient) {

  }

  sendLibro(titulo: string, sipnosis: string, genero: number, clasificacion: string, idioma: string): void{
      var libro = {
        titulo: titulo,
        sipnosis: sipnosis,
        genero: genero,
        clasificacion: clasificacion,
        idioma: idioma
      }
      this.http.post("http://localhost:3007/libro/newlibro/",libro).subscribe(data => {
        if(data){
          console.log("Se envio el libro xD");
        }else{
          console.log("No se envio :(");
        }
      });
  }
}
