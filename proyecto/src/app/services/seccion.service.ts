import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const api_url = "http://localhost:3000/api";

@Injectable({
  providedIn: 'root'
})
export class SeccionService {

  constructor(private http: HttpClient) { }

  send_seccion(titulo:string,obraid:number,contenido:string,block:string) {
      var seccion = {
        titulo: titulo,
        contenido: contenido,
        obraid: obraid,
        block: block
      }
    return this.http.post(`http://localhost:3000/api/seccion`,seccion)

  }

  createSection(seccion:any){
    return this.http.post(`${api_url}/seccion`,seccion);
  }

  getAllSectionsByObraId(id:any){
    return this.http.get(`${api_url}/seccion/obra/${id}`);
  }

  updateSection(section:any,id:any){
    return this.http.patch(`${api_url}/seccion/${id}`,section);
  }

  get_seccion_id(id:number): Observable<any>{

    return  this.http.get(`${api_url}/seccion/${id}`);

  }

  update_sect(id:number,titulo:string,contenido:string){

    var seccion = {
      titulo:titulo,
      contenido:contenido
    }

    return this.http.patch(`${api_url}/seccion/${id}`,seccion);

  }

  getAllSectionsFromBookId(id:number):Observable<any>{

    return this.http.get(`${api_url}/seccion/obra/${id}`);

  }

}
