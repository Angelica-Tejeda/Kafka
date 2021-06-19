import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Libro } from '../components/collection/libro.model';
import { SeccionService } from './seccion.service';

const api_url = "http://localhost:3000/api";

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  libros = [];

  constructor(private http : HttpClient, private seccion:SeccionService) {

  }

  getAllObras():Observable<any>{
    return this.http.get(`${api_url}/obra`);
  }



  sendLibro(libro:any):Observable<any>{


      return this.http.post(`${api_url}/obra`,libro);

  }

  getLibroById(id:number): Observable<any>{
    return  this.http.get(`${api_url}/obra/${id}`);
  }

  get_libro_por_nombre(titulo:string): Observable<any>{
    return  this.http.get(`http://localhost:3000/api/libro/${titulo}`);
  }
}
