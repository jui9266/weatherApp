import { useAppDispatch } from 'hooks'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCoordinates } from 'services/coordinates'
import { getRcentSearchWeather } from 'services/weather'
import { setCoor } from 'states/weather'
import { ICoordinates } from 'types/recentSearch'
import { RecentSearchWeather } from 'types/weather'
import { iconWeather } from 'utils/weatherIcon'
import styles from './recentSearch.module.scss'

interface Props {
  local: ICoordinates
  handleRemoveRecentData: (addressName: string) => void
}

const RcentItem = ({ local, handleRemoveRecentData }: Props) => {
  const [weatherData, setWeatherData] = useState<RecentSearchWeather | undefined>(undefined)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    getRcentSearchWeather(local.x, local.y, setWeatherData)
  }, [local.x, local.y])

  const handleRemoveButton = () => {
    handleRemoveRecentData(local.address_name)
  }

  const handleRecentItem = () => {
    getCoordinates(local.address_name).then((res) => {
      dispatch(setCoor({ lat: res.y, lon: res.x, name: res.address_name }))
      navigate('/')
    })
  }

  return (
    <li className={styles.recentSearchItem}>
      {/* <button type='button' onClick={handleRecentItem}> */}
      <button className={styles.removeButton} onClick={handleRemoveButton} type='button'>
        X
      </button>
      <div role='button' tabIndex={0} onClick={handleRecentItem} className={styles.sildeInner}>
        <p className={styles.date}>{local.address_name}</p>
        <div className={styles.weatherInfo}>
          {weatherData && <img className={styles.weatherIcon} src={iconWeather[weatherData.weather[0].main]} alt='' />}
          <p className={styles.temp}>{weatherData?.main.temp.toFixed()} °</p>
        </div>
      </div>
    </li>
  )
}

export default RcentItem
