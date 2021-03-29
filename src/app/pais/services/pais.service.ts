import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _url:string = 'https://restcountries.eu/rest/v2';

  constructor( private http:HttpClient ) { }

  get httpParams() {
    return new HttpParams().set('fields', 'flag;name;capital;region;population;alpha3Code');
  }

  buscarPais(query: string): Observable<Country[]> {
    const url = `${this._url}/name/${query}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarCapital(query: string): Observable<Country[]> {
    const url = `${this._url}/capital/${query}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getPaisPorAlpha(query: string): Observable<Country> {
    const url = `${this._url}/alpha/${query}`;

    return this.http.get<Country>(url);
  }
  
  buscarRegion( region: string): Observable<Country[]> {

    const url = `${this._url}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
