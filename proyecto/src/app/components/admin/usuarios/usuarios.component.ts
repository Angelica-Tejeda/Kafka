import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

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

  cambiarActivo(user:any,event:any){

    var val = event.target.value;
    if(localStorage.getItem('id_user')==user.id){
      console.log("xd");
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se puede desactivar tu usuario!',
        footer: '<a href="">Intenta con otro</a>'
      })

      event.target.value = "on";
    }else{
      Swal.fire({
        title: val=="off"? '¿Quieres desactivar este usuario?' : "¿Quieres activar este usuario?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Si`,
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Se desactivo con exito', '', 'success')
          event.target.value = val=="off"? "off" : "on";
        }else if (result.isDenied) {
          Swal.fire('Se cancelo la accion', '', 'info')
          event.target.value = val=="off"? "on" :"off" ;
        }
      })
    }

  }

}
