import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Libro } from '../components/collection/libro.model';
import { SeccionService } from './seccion.service';
@Injectable({
  providedIn: 'root'
})
export class LibroService {
  libros = [];

  constructor(private http : HttpClient, private seccion:SeccionService) {

  }

  getCollection():Observable<any>{
    return this.http.get("http://localhost:3000/api/libro");
  }



  sendLibro(titulo: string, sipnosis: string, genero: number, clasificacion: string, idioma: string):Observable<any>{
      var libro = {
        titulo: titulo,
        sinopsis: sipnosis,
        genero: genero,
        clasificacion: clasificacion,
        idioma: idioma
      }

      return this.http.post("http://localhost:3000/api/libro/",libro);
      // .subscribe(res => {
      //   if(res){
      //     let data = JSON.parse(JSON.stringify(res));
      //     console.log(data.id);
      //     this.seccion.send_seccion("Borrador",Number(data.id),"","0");

      //   }else{
      //     console.log("No se envio :(");
      //   }
      // });
  }

  get_libro(id:number): Observable<any>{
    return  this.http.get(`http://localhost:3000/api/libro/${id}`);
  }

}
