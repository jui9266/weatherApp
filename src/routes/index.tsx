import { Routes, Route } from 'react-router-dom'

import styles from './routes.module.scss'
import Weather from './Weather'

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Weather />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  )
}

export default App
