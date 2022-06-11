import axios, { CancelTokenSource } from 'axios'
import { RecentSearchWeather } from 'types/weather'

const SEARCH_BASE_URL = `https://api.openweathermap.org/data/2.5/`

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

const getWeatherOption = {
  appid: API_KEY,
  units: 'metric',
  lang: 'kr',
}

let call: CancelTokenSource

export const getWeather = (lon: string, lat: string) => {
  if (call) call.cancel('cancel')
  call = axios.CancelToken.source()
  // eslint-disable-next-line no-console
  return axios
    .get(`${SEARCH_BASE_URL}onecall`, {
      cancelToken: call.token,
      params: {
        lat,
        lon,
        ...getWeatherOption,
        exclude: 'minutely,alerts',
      },
      timeout: 10000,
    })
    .then((res) => {
      const result = res?.data
      return result
    })
    .catch((thrown) => {
      if (axios.isCancel(thrown)) {
        // eslint-disable-next-line no-console
        console.log(`%c Request ${thrown.message}`, 'background: #bd71ff; color:#eaeaea')
      }
    })
}

export const getRcentSearchWeather = (
  x: string,
  y: string,
  setWeatherData: React.Dispatch<React.SetStateAction<RecentSearchWeather | undefined>>
) => {
  // eslint-disable-next-line no-console
  return axios
    .get(`${SEARCH_BASE_URL}weather`, {
      params: {
        lon: x,
        lat: y,
        ...getWeatherOption,
      },
      timeout: 10000,
    })
    .then((res) => {
      const result = res?.data
      setWeatherData(result)
    })
    .catch((thrown) => {
      if (axios.isCancel(thrown)) {
        // eslint-disable-next-line no-console
        console.log(`%c Request ${thrown.message}`, 'background: #bd71ff; color:#eaeaea')
      }
    })
}
