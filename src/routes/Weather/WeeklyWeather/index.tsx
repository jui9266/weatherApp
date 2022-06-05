import styles from './weeklyWeather.module.scss'
import { IDaily } from 'types/weather'
import SilderItem from './SilderItem'

import 'swiper/css'

interface Props {
  data: IDaily[]
}

const WeeklyWeather = ({ data }: Props) => {
  return (
    <div className={styles.weeklyWeatherWrap}>
      <p className={styles.title}>이번주 날씨</p>
      {data?.map((el) => (
        <SilderItem weeklyData={el} key={el.dt} />
      ))}
    </div>
  )
}

export default WeeklyWeather
