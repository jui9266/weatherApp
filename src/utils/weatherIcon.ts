import * as weatherIcon from 'assets/img/weatherIcon'

interface IIconWeather {
  [key: string]: string
}
export const iconWeather: IIconWeather = {
  Clouds: weatherIcon.cloud,
  Rain: weatherIcon.rainSun,
  Drizzle: weatherIcon.rainSun,
  Mist: weatherIcon.rainSun,
  Clear: weatherIcon.sun,
  Snow: weatherIcon.snow,
  Smoke: weatherIcon.smoke,
  Thunderstorm: weatherIcon.storm,
}
