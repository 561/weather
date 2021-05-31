import { Component, Input, OnInit } from '@angular/core';
import { Day } from "../interfaces";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() days: Day[] = [];


  constructor() { }

  sort(a: number | string, b: number | string, fromLittle: boolean): number {
    if (fromLittle) {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
    } else {
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
    }
    return 0;
  }

  sortByDays(): void {
    const fromLittle = this.days[0].dayId > this.days[4].dayId
    this.days = this.days.sort((a,b) => this.sort(a.dayId,b.dayId,fromLittle));
  }

  sortByTemps() :void {
    const fromLittle = this.days[0].temp > this.days[4].temp
    this.days = this.days.sort((a,b) => this.sort(a.temp,b.temp,fromLittle));
  }

  ngOnInit(): void {
  }

}
