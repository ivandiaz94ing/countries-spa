import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries:  Country[ ] = [ ];
  public isloading: boolean = false;


  constructor (private countriesService: CountriesService){

  }

  searchByCapital( term: string ) : void {
    this.isloading = true;
    this.countriesService.searchCapital( term)
    .subscribe( countries => {
      this.countries = countries;
      this.isloading = false;
    })
  }

}
