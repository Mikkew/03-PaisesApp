import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  paises: Country[] = []

  constructor( private paisService:PaisService) { }

  ngOnInit(): void {
  }

  buscar( ) {
    this.paises = []

    this.paisService.buscarRegion(this.regionActiva)
      .subscribe( paises => {
        console.log(paises);
        
        this.paises = paises;
        
      }
    );
  }
 
}
