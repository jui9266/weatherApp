import styles from './silderItem.module.scss'
import dayjs from 'dayjs'

import { IDaily } from 'types/weather'
import { iconWeather } from 'utils/weatherIcon'

interface Props {
  weeklyData: IDaily
}

const SilderItem = ({ weeklyData }: Props) => {
  return (
    <div className={styles.sildeItem}>
      <p className={styles.date}>{dayjs.unix(weeklyData.dt).format('ddd')}</p>
      <div>
        <span className={styles.temp}>{weeklyData?.temp.max.toFixed()} ° / </span>
        <span className={styles.tempMin}>{weeklyData?.temp.min.toFixed()} °</span>
      </div>
      <div className={styles.weatherWrap}>
        <img className={styles.weatherIcon} src={iconWeather[weeklyData?.weather[0].main]} alt='' />
        <span className={styles.weaherText}>{weeklyData.weather[0].main}</span>
      </div>
    </div>
  )
}

export default SilderItem
