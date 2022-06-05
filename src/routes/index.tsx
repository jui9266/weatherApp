import { IconHome, IconSearch } from 'assets/svg'
import { Routes, Route, NavLink } from 'react-router-dom'
import cx from 'classnames'

import styles from './routes.module.scss'
import Search from './Search'
import Weather from './Weather'

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Weather />} />
        <Route path='searchlocal' element={<Search />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>

      <nav className={styles.nav}>
        <ul>
          <li className={styles.navItem}>
            <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              <IconHome className={styles.icon} />
              <span className={styles.navText}>메인</span>
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to='searchlocal' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              <IconSearch className={styles.icon} />
              <span className={styles.navText}>검색</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App
