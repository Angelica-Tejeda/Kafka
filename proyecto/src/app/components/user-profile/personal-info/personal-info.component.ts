import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  public  user={
    name :"Josue Cabezas",
    userName : "josalcab",
    password: "1234aaaa",
    email: "josalcab2@espol.edu.ec",
    gender: "male",
    dateOfBirth: "16/03/1998"
  }
  constructor() { }

  unlock(id:any){

  }

  ngOnInit(): void {
  }

}
