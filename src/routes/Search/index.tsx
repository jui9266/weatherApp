import { ChangeEvent, FormEvent, KeyboardEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { IconSearch } from 'assets/svg'
import { useAppDispatch, useAppSelector } from 'hooks'
import { getCoordinates } from 'services/coordinates'
import { getSearchActiveIndex, setCoor, setSearchActiveIndex } from 'states/weather'
import { ICoordinates } from 'types/recentSearch'
import { storage } from 'utils/storage'
import styles from './search.module.scss'

import RecentSearch from './RecentSearch'
import AddressList from './AddressList'

const Search = () => {
  const [searchVal, setSearchVal] = useState<string>('')
  const [addressList, setAddressList] = useState<ICoordinates[] | []>([])
  const [emptySearchItem, setEmptySearchItem] = useState(false)
  const activeIndex = useAppSelector(getSearchActiveIndex)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    setEmptySearchItem(false)
    if (searchVal.length < 2) {
      return setAddressList([])
    }
    const debounce = setTimeout(() => {
      getCoordinates(searchVal)
        .then((res) => {
          setAddressList(res.data.documents)
        })
        .catch(() => {
          setAddressList([])
        })
    }, 500)
    return () => clearTimeout(debounce)
  }, [searchVal])

  const handleSearchVal = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchActiveIndex(0))
    setSearchVal(e.currentTarget.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getCoordinates(searchVal).then((res) => {
      if (res.data.documents.length === 0) {
        setEmptySearchItem(true)
        return
      }
      dispatch(
        setCoor({
          lat: res.data.documents[activeIndex].y,
          lon: res.data.documents[activeIndex].x,
          name: res.data.documents[activeIndex].address_name,
        })
      )
      storage(res.data.documents[activeIndex])
      navigate('/')
    })
  }

  const handleKeyMove = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!addressList || event.nativeEvent.isComposing) return

    if (event.key === 'ArrowUp')
      dispatch(activeIndex > 0 ? setSearchActiveIndex(activeIndex - 1) : setSearchActiveIndex(addressList.length - 1))

    if (event.key === 'ArrowDown')
      dispatch(activeIndex === addressList.length - 1 ? setSearchActiveIndex(0) : setSearchActiveIndex(activeIndex + 1))
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.inputWrap}>
        <form className={styles.inputForm} onSubmit={handleSubmit}>
          <input
            placeholder='검색하고 싶은 국내 지역을 입력하세요'
            className={styles.input}
            value={searchVal}
            onKeyDown={handleKeyMove}
            onChange={handleSearchVal}
          />
          <button className={styles.submitButton} type='submit'>
            <IconSearch className={styles.searchIcon} />
          </button>
        </form>
        {emptySearchItem && <p className={styles.emptySearchItem}>검색 결과가 없습니다.</p>}
        {addressList.length > 0 && (
          <ul className={styles.addressList}>
            {addressList.map((el, index) => (
              <AddressList key={el.address_name} data={el} listIndex={index} />
            ))}
          </ul>
        )}
      </div>
      <RecentSearch />
    </div>
  )
}

export default Search
