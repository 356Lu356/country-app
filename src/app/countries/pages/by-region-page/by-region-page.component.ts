import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  public selectedRegion?: Region;
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  constructor(private CountriesService: CountriesService) {}

  searchByRegion(region: Region): void {
    this.selectedRegion = region;
    this.CountriesService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
