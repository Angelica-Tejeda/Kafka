import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  public  user={
    name :"Angelica Tejeda",
    userName : "atejeda",
    password: "1234",
    email: "atejeda@espol.edu.ec",
    gender: "female",
    dateOfBirth: "16/03/1998"
  }
  constructor() { }

  unlock(id:any){

  }

  ngOnInit(): void {
  }

}
