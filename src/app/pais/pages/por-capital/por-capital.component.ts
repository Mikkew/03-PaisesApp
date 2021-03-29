import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service'

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: [
    './por-capital.component.css',
  ]
})
export class PorCapitalComponent {

  termino: string = "";
  error: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService:PaisService ) { }

  buscar( termino: string ) {
    this.mostrarSugerencias = false;
    this.error = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino)
      .subscribe( paises => {
        this.paises = paises;
        
      }, (err)=> {
        this.error = true;
      }
    );
  }

  sugerencias( termino:string ) {
    this.mostrarSugerencias = true;
    this.error = false;
    this.termino = termino;
    this.paisService.buscarCapital(termino)
      .subscribe( 
        (paises) => this.paisesSugeridos = paises.slice(0,5) ,
        (err) => {
          this.paisesSugeridos = [];
        }
      )
  }

  buscarSugerido( termino: string ) {
    this.buscar( termino );
  }

}
