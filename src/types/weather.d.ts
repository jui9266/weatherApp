export interface IRootObject {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  current: Current
  hourly: Hourly[]
  daily: IDaily[]
}

export interface IDaily {
  dt: number
  sunrise: number
  sunset: number
  moonrise: number
  moonset: number
  moon_phase: number
  temp: ITemp
  feels_like: IFeelslike
  pressure: number
  humidity: number
  dew_point: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather: Weather[]
  clouds: number
  pop: number
  uvi: number
  rain?: number
}

interface IFeelslike {
  day: number
  night: number
  eve: number
  morn: number
}

interface ITemp {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}

export interface IHourly {
  dt: number
  temp: number
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather: Weather[]
  pop: number
}

export interface ICurrent {
  dt: number
  sunrise: number
  sunset: number
  temp: number
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather: Weather[]
}

export interface IWeather {
  id: number
  main: string
  description: string
  icon: string
}

export interface RecentSearchWeather {
  coord: {
    lon: number
    lat: number
  }

  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: {
    speed: number
    deg: number
  }

  clouds: {
    all: number
  }
  dt: number
  sys: {
    type: number
    id: number
    message: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

interface Weather {
  id: number
  main: string
  description: string
  icon: string
}
