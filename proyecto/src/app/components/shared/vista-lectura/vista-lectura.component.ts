import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-lectura',
  templateUrl: './vista-lectura.component.html',
  styleUrls: ['./vista-lectura.component.css']
})
export class VistaLecturaComponent implements OnInit {
  @Input() titulo: string;
  constructor() {
    this.titulo="Titulo de prueba";
  }

  ngOnInit(): void {
  }

}
