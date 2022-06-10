import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

import { useAppSelector } from 'hooks'
import { getWeather } from 'services/weather'
import { getNowLocation } from 'states/weather'
import Hourly from './Hourly'
import NowWeather from './NowWeather'
import styles from './weather.module.scss'
import WeeklyWeather from './WeeklyWeather'
import { IconLocation } from 'assets/svg'
import Empty from 'components/Empty'

const Weather = () => {
  const location = useAppSelector<{ lat: string; lon: string; name: string } | undefined>(getNowLocation)
  const time = dayjs().format('ddd , DD MMM YYYY ')

  const { data, isLoading } = useQuery(
    ['myLocationWeather', location],
    () => location && getWeather(location?.lon, location?.lat),

    {
      enabled: !!location,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    }
  )

  return (
    <div className={styles.wrap}>
      <header>
        <Link className={styles.link} to='searchlocal' type='button'>
          <IconLocation className={styles.svg} />
          <span className={styles.location}>{location?.name}</span>
          <br />
          <span className={styles.time}>{time}</span>
        </Link>
      </header>
      {isLoading && <Empty text='날씨 정보를 가져오고있어요!' />}
      {data && (
        <>
          <NowWeather data={data.daily[0]} />
          <Hourly data={data.hourly} />
          <WeeklyWeather data={data.daily} />
        </>
      )}
    </div>
  )
}

export default Weather
