import styles from './nowWeather.module.scss'
import { ICurrent, ITemp } from 'types/weather'
import { IconDroplet, IconWind, IconUv } from 'assets/svg'
import * as weatherIcon from 'assets/img/weatherIcon'
import dayjs from 'dayjs'

interface Props {
  highLowTemp?: ITemp
  nowData: ICurrent
}

interface IIconWeather {
  [key: string]: string
}
const NowWeather = ({ nowData, highLowTemp }: Props) => {
  const time = dayjs.unix(nowData.dt).format('HH')

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
        <img className={styles.weatherIcon} src={iconWeather[nowData?.weather[0].main]} alt='' />
        <div className={styles.temp}>
          <p className={styles.nowTemp}>{nowData?.temp.toFixed(1)} °</p>
          <span className={styles.highLowTemp}>
            <span className={styles.high}>{highLowTemp?.max.toFixed()}° </span>
            <span className={styles.slash}> / </span>
            <span className={styles.low}> {highLowTemp?.min.toFixed()}°</span>
          </span>
        </div>
      </div>
      <ul className={styles.subInfo}>
        <li className={styles.subInfoItem}>
          <IconDroplet className={styles.svgIcon} width={20} />
          <span className={styles.info}>{nowData?.humidity} %</span>
        </li>
        <li className={styles.subInfoItem}>
          <IconWind className={styles.svgIcon} width={20} />
          <span className={styles.info}>{nowData?.wind_speed}m/s</span>
        </li>
        <li className={styles.subInfoItem}>
          <IconUv className={styles.svgIcon} width={20} />
          <span className={styles.info}>{nowData?.uvi}</span>
        </li>
      </ul>
    </div>
  )
}

export default NowWeather
