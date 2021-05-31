import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherApiService } from "../weather-api.service";
import { Subject, throwError} from "rxjs";
import { switchMap, takeUntil } from "rxjs/operators";
import * as moment from "moment";
import { WeatherAPI, Day } from "../interfaces";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {
  cityName = '';
  destroy$ = new Subject<void>();
  days: Day[] = [];
  error = false;

  constructor(private api: WeatherApiService, private router: Router, private activateRoute: ActivatedRoute) {
    activateRoute.params.subscribe(params => {
        if (params['name']) {
          this.cityName = params['name'];
          this.search();
        }});
  }

  ngOnInit(): void {

  }

  solveDays(data: WeatherAPI): void {
    const temps = data.daily.map(day => day.temp.day)
    this.days = Array.from([1,2,3,4,5]).map((idx) => {
      return {
        temp: temps[idx],
        dayId: idx,
        date: this.solveDate(idx)
      }
    })
  }

  solveDate(day: number): string {
    this.error = false;
    return moment().add(day, 'days').format('dddd');
  }

  showError(): void {
    this.error = true;
    this.days = [];
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  goToCity(): void {
    this.router.navigate(
      ['/city', this.cityName]
    );
  }

  search(): void {
    this.api.getCityInfo(this.cityName).pipe(
      takeUntil(this.destroy$),
      switchMap((res) => {
        if (res?.length) {
          return this.api.getWeather(res[0])
        }
        return throwError({})
      })
    ).subscribe(
      res => this.solveDays(res),
      () => this.showError()
    );
  }

}
