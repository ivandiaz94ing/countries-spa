
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map, delay } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'


  constructor(private http: HttpClient) { }


  private getCountryRequest(url: string):Observable<Country[]>{
    return this.http.get<Country[]>(url)
      .pipe(
        catchError ( () => of ( [ ]) ),
        delay( 2000 ),
    );
  }

  searchCountryByAlphaCode( code: string): Observable<Country | null> {

    const url = `${this.apiUrl }/alpha/${code}`;
    return this.http.get<Country[]>(url)
    .pipe(
      map( countries => countries.length > 0 ? countries[0]: null),
      catchError ( () => of ( null ) )
    );

  }

  searchCapital( term: string ): Observable<Country[]>{
    const url = `${this.apiUrl }/capital/${term}`;
    return this.getCountryRequest(url);
  }

  searchCountry(pais: string ): Observable<Country[]>{
    const url = `${this.apiUrl }/name/${pais}`;
    return this.getCountryRequest(url);
  }

  searchRegion(region: string ): Observable<Country[]>{
    const url = `${this.apiUrl }/region/${region}`;
    return this.getCountryRequest(url);
  }

}
