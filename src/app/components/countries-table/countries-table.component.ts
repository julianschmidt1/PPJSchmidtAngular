import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './countries-table.component.html',
  styleUrl: './countries-table.component.scss'
})
export class CountriesTableComponent {
  public countries = [];
  httpClient = inject(HttpClient);

  @Output() onCountrySelect = new EventEmitter<any>();

  public getCountries<T>(): Observable<T> {
    return this.httpClient.get<T>('https://restcountries.com/v3.1/subregion/Africa');
  }

  handleSelectCountry(country): void {
    console.log(country);
    this.onCountrySelect.emit({
      name: country.name.common,
      flag: country.flags.svg
    });
  }

  ngOnInit(): void {
    this.getCountries().subscribe({
      next: (data: any) => {
        console.log(data)
        this.countries = data;
      }
    })
  }
}
