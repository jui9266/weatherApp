import { IconSearch } from 'assets/svg'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'hooks'
import { ChangeEvent, FormEvent, useState } from 'react'

import { getCoordinates } from 'services/coordinates'
import RecentSearch from './RecentSearch'
import styles from './search.module.scss'
import { setCoor } from 'states/weather'
import { ICoordinates } from 'types/recentSearch'
import AddressList from './AddressList'
import { storage } from 'utils/storage'

const Search = () => {
  const [searchVal, setSearchVal] = useState<string>('')
  const [addressList, setAddressList] = useState<ICoordinates[] | []>([])
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleSearchVal = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.currentTarget.value)
    if (e.currentTarget.value.length >= 2) {
      getCoordinates(e.currentTarget.value)
        .then((res) => {
          setAddressList(res.data.documents)
        })
        .catch(() => {
          setAddressList([])
        })
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getCoordinates(searchVal).then((res) => {
      dispatch(
        setCoor({
          lat: res.data.documents[0].y,
          lon: res.data.documents[0].x,
          name: res.data.documents[0].address_name,
        })
      )
      storage(res.data.documents[0])
      navigate('/')
    })
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.inputWrap}>
        <form className={styles.inputForm} onSubmit={handleSubmit}>
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
        {addressList.length > 0 && (
          <ul className={styles.addressList}>
            {addressList.map((el) => (
              <AddressList key={el.address_name} data={el} />
            ))}
          </ul>
        )}
      </div>
      <RecentSearch />
    </div>
  )
}

export default Search
