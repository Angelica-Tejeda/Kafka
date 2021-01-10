import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-vista-escritura',
  templateUrl: './vista-escritura.component.html',
  styleUrls: ['./vista-escritura.component.css']
})
export class VistaEscrituraComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }

  atras(){
    this.location.back();
  }

}
