import {Input} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-vista-lectura',
  templateUrl: './vista-lectura.component.html',
  styleUrls: ['./vista-lectura.component.css'],
})
export class VistaLecturaComponent implements OnInit {
  @Input() titulo: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.titulo='Titulo de prueba';
    console.log('Este es el id' + this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    console.log('Este es el id' + this.route.snapshot.paramMap.get('id'));
  }
}
