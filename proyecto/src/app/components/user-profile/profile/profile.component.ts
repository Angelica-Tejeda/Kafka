import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profilePic : any;
  username:any;
  onLibBooks:any;
  readedBooks:any;
  nFollowedAuthors:any;
  nSuscribedAuthors:any;
  constructor() { }

  ngOnInit(): void {
    this.getUserData(5);
  }
/**ESTA PARTE TIENE QUE SER MODIFICADA PARA QUE EL SERVICIO HAGA LA PETICION DE LOS DATOS DE USUARIO */
  getUserData(id:any){
    this.profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"
    this.username="Angélica Tejeda"
    this.onLibBooks=15
    this.readedBooks=12
    this.nFollowedAuthors=14
    this.nSuscribedAuthors=4
  }
  hide(){
    
  }

  showAboutMe() {
    $("#tab1").removeClass("not-display")
    $("#tab2").addClass("not-display")
    $("#tab3").addClass("not-display")
    $("#nav-op-1").addClass("active")
    $("#nav-op-2").removeClass("active")
    $("#nav-op-3").removeClass("active")
  }

  showPersonalInf() {
    $("#tab1").addClass("not-display")
    $("#tab2").removeClass("not-display")
    $("#tab3").addClass("not-display")
    $("#nav-op-1").removeClass("active")
    $("#nav-op-2").addClass("active")
    $("#nav-op-3").removeClass("active")
  }

  showSubs() {
    $("#tab1").addClass("not-display")
    $("#tab2").addClass("not-display")
    $("#tab3").removeClass("not-display")
    $("#nav-op-1").removeClass("active")
    $("#nav-op-2").removeClass("active")
    $("#nav-op-3").addClass("active")
  }

}
