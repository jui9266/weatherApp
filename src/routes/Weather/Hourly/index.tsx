import styles from './hourly.module.scss'
import { IHourly } from 'types/weather'
import dayjs from 'dayjs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { iconWeather } from 'utils/weatherIcon'

interface Props {
  data: IHourly[]
}

const Hourly = ({ data }: Props) => {
  const filterData = data.filter((_, idx) => idx < 24)

  return (
    <div className={styles.hourlyWeatherWrap}>
      <p className={styles.title}>시간별 날씨</p>
      <Swiper
        className={styles.swiper}
        spaceBetween={10}
        slidesPerView={5.5}
        freeMode
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
      >
        {filterData.map((el) => (
          <SwiperSlide className={styles.hourlyItem} key={el.dt}>
            <p className={styles.time}>{dayjs.unix(el.dt).format('HH')}시</p>
            <img className={styles.weatherIcon} src={iconWeather[el?.weather[0].main]} alt='' />
            <p className={styles.temp}>{el.temp.toFixed()} °</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hourly
