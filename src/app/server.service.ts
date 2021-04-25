import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServerService {
  public APIUrl = 'http://api.weatherstack.com/current';
  public APIKey = 'ce06292f55182dcc9ed888cc07fe7f6b';
  constructor(private http: HttpClient) { }

  FetchWeatherData(city: string): any {
    return this.http.get(this.APIUrl + '?access_key=' + this.APIKey + '&query=' + city);
  }
}
