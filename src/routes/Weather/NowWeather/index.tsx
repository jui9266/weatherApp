import styles from './nowWeather.module.scss'
import { IDaily } from 'types/weather'
import { IconDroplet, IconWind, IconUv } from 'assets/svg'
import * as weatherIcon from 'assets/img/weatherIcon'
import dayjs from 'dayjs'

interface Props {
  data: IDaily
}

interface IIconWeather {
  [key: string]: string
}
const NowWeather = ({ data }: Props) => {
  const time = dayjs(data.dt).format('HH')

  const iconWeather: IIconWeather = {
    Clouds: Number(time) < 19 ? weatherIcon.cloundSun : weatherIcon.cloudNight,
    Rain: Number(time) < 19 ? weatherIcon.rainSun : weatherIcon.rainNight,
    Drizzle: Number(time) < 19 ? weatherIcon.rainSun : weatherIcon.rainNight,
    Clear: Number(time) < 19 ? weatherIcon.sun : weatherIcon.nigth,
    Snow: weatherIcon.snow,
    Smoke: weatherIcon.smoke,
    Thunderstorm: weatherIcon.storm,
  }

  return (
    <div className={styles.nowWeatherWrap}>
      <div className={styles.nowWeatherTemp}>
        <img className={styles.weatherIcon} src={iconWeather[data?.weather[0].main]} alt='' />
        <div className={styles.temp}>
          <p className={styles.nowTemp}>{data?.temp.day.toFixed(1)} °</p>
          <span className={styles.highLowTemp}>
            <span className={styles.high}>{data?.temp.max.toFixed()}° </span>
            <span className={styles.slash}> / </span>
            <span className={styles.low}> {data?.temp.min.toFixed()}°</span>
          </span>
        </div>
      </div>
      <ul className={styles.subInfo}>
        <li className={styles.subInfoItem}>
          <IconDroplet className={styles.svgIcon} width={20} />
          <span className={styles.info}>{data?.humidity} %</span>
        </li>
        <li className={styles.subInfoItem}>
          <IconWind className={styles.svgIcon} width={20} />
          <span className={styles.info}>{data?.wind_speed}m/s</span>
        </li>
        <li className={styles.subInfoItem}>
          <IconUv className={styles.svgIcon} width={20} />
          <span className={styles.info}>{data?.uvi}</span>
        </li>
      </ul>
    </div>
  )
}

export default NowWeather
