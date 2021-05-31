import { Component, Input, OnInit } from '@angular/core';
import { Day } from "../interfaces";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() day: Day = {date: '', temp: 0, dayId: 1};

  constructor() { }

  ngOnInit(): void {
  }

}
