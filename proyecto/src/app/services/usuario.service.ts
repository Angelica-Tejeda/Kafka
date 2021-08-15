import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

import {SeccionService} from './seccion.service';
import {environment} from '../../environments/environment';

const _apiUrl = environment.apiURL;


@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  libros = [];

  constructor(private http : HttpClient, private seccion:SeccionService) {

  }

  getUserInfo():Observable<any> {
    return this.http.get(`${_apiUrl}/usuario/${localStorage.getItem('id_user')}`);
  }

  updateUserInfo(data:any):Observable<any>{
    return this.http.put(`${_apiUrl}/usuario/${localStorage.getItem('id_user')}`,data);
  }

  getAllUsers():Observable<any>{
    return this.http.get(`${_apiUrl}/usuario`);
  }

  getUserById(id:number): Observable<any> {
    return this.http.get(`${_apiUrl}/usuario/${id}`);
  }

}
