import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  get_seccion_id(id:number): Observable<any>{
    return  this.http.get(`http://localhost:3000/api/seccion/${id}`);
  }

  update_sect(id:number,titulo:string,contenido:string){
    var seccion = {
      titulo:titulo,
      contenido:contenido
    }
    console.log("update_Sect");
     this.http.patch(`http://localhost:3000/api/seccion/${id}`,seccion).subscribe(data => {
      if(data){
        console.log(data);

      }
    });
  }
}
