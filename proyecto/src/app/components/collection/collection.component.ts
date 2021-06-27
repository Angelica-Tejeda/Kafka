import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LibroService} from 'src/app/services/libro.service';
import {Libro} from './libro.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  coleccion: any[] = [];

  constructor(private router: Router, private librosS:LibroService) {

  }

  ngOnInit(): void {
    this.librosS.getAllObras().subscribe((res:any)=>{
      if (res) {
        this.coleccion = res;
      }
    });
  }


  editar() {
    this.router.navigate(['vistaEscritura']);
  }
}
