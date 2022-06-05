import { IconSearch } from 'assets/svg'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'hooks'
import { ChangeEvent, FormEvent, useState } from 'react'
import { getCoordinates } from 'services/coordinates'
import RecentSearch from './RecentSearch'
import styles from './search.module.scss'
import { setCoor } from 'states/weather'

const Search = () => {
  const [searchVal, setSearchVal] = useState<string>('')
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleSearchVal = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.currentTarget.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getCoordinates(searchVal).then((res) => {
      dispatch(setCoor({ lat: res.y, lon: res.x, name: res.address_name }))
      navigate('/')
    })
  }

  return (
    <div className={styles.wrap}>
      <form className={styles.inputWrap} onSubmit={handleSubmit}>
        <input
          placeholder='검색하고 싶은 지역을 입력하세요'
          className={styles.input}
          value={searchVal}
          onChange={handleSearchVal}
        />
        <button className={styles.submitButton} type='submit'>
          <IconSearch className={styles.searchIcon} />
        </button>
      </form>
      <RecentSearch />
    </div>
  )
}

export default Search
