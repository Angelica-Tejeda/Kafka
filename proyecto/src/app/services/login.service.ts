import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  getUser(user:String):Observable<any>{
    return this.http.get(`http://localhost:3000/api/login/${user}`);
  }
  /*register():Observable<any>{
    return this.http.post("http://localhost:3000/api/login/register");
  }*/
}
