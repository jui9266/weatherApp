import React from 'react'
import styles from './weather.module.scss'

const Weather = () => {
  return (
    <div className='wrap'>
      <header>
        <p className={styles.test}>오늘도 좋은 하루 되세요!</p>
        <p>강원도 원주시</p>
      </header>
    </div>
  )
}

export default Weather
