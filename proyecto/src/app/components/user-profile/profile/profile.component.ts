import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   profilePic : any;
   username:any;
  constructor() { }

  ngOnInit(): void {
    this.getUserData(5);
  }
/**ESTA PARTE TIENE QUE SER MODIFICADA PARA QUE EL SERVICIO HAGA LA PETICION DE LOS DATOS DE USUARIO */
  getUserData(id:any){
    this.profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"
    this.username="Angélica Tejeda"
  }

}
