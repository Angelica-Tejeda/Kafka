import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
      return this.http.post("http://localhost:3000/api/seccion/",seccion).subscribe(data =>{
        if(data){
          console.log(data);
        }else{
          console.log("no se creo la seccion");
        }
      });

  }
}
