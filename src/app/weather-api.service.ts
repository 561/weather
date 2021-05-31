import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { City, WeatherAPI } from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) { }

  getCityInfo(city: string): Observable<City[]> {
    return this.http.get<City[]>(
      `${environment.api_url}geo/1.0/direct`,
      {params: {
          q: city
        }})
  }

  getWeather(d: City): Observable<WeatherAPI> {
    return this.http.get<WeatherAPI>(
      `${environment.api_url}data/2.5/onecall`,
      {params: {
        lat: d.lat,
        lon: d.lon,
        units: 'metric'
      }})
  }
}
