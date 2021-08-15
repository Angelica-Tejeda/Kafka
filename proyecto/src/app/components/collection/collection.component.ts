import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BibliotecaService} from 'src/app/services/biblioteca.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  coleccion: any[] = [];

  constructor(private router: Router, private bibS:BibliotecaService) {

  }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['login']);
    } else {
      this.bibS.getBibliotecas().subscribe((res:any)=>{
        if (res) {
          this.coleccion = res;
        }
      });
    }
  }

  eliminarBib(id:number): void {
    this.bibS.eliminarBiblioteca(id).subscribe((res) => {
      console.log(res);
    });
    window.location.reload();
  }

}
