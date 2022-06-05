import { useEffect, useState } from 'react'
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
import { Location } from 'assets/svg'
import Empty from 'components/Empty'

const Weather = () => {
  // const [nowData, setNowData] = useState(undefined)

  const lacation = useAppSelector<{ lat: string; lon: string; name: string } | undefined>(getNowLocation)
  const [time, setTime] = useState<string>('')
  useEffect(() => {
    setTime(dayjs().format('ddd , DD MMM YYYY '))
  }, [])
  const { data, isLoading } = useQuery(
    ['myLocationWeather', lacation],
    () => lacation && getWeather(lacation?.lon, lacation?.lat),

    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    }
  )

  return (
    <div className={styles.wrap}>
      <header>
        <Link className={styles.link} to='searchlocal' type='button'>
          <Location className={styles.svg} />
          <span className={styles.location}>{lacation?.name}</span>
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
