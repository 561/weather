export interface City {
  country: string;
  lat: number;
  local_names: any;
  lon: number;
  name: string;
}

export interface Day {
  dayId: number;
  temp: number;
  date: string;
}

export interface WeatherAPI {
  current: any;
  daily: DailyData[];
  hourly: any[];
  lat: number;
  lon: number;
  minutely: any[];
  timezone: string;
}

export interface Temp {
  day: number;
  eve: number;
  max: number;
  min: number;
  morn: number;
  night: number;
}

export interface DailyData {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: any;
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: any;
  uvi: number;
  weather: any[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}
