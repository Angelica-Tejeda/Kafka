import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private router: Router, private userS: UsuarioService) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['login']);
    } else {
      this.getAllUsers();
    }
  }

  getAllUsers(){
    this.userS.getAllUsers().subscribe((data:any[])=>{
      this.usuarios = [];
      this.usuarios = data;
      for(var x = 0 ; x<data.length; x++){
        console.log(data[x]);

      }
    })
  }

}
