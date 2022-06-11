import { useAppDispatch, useAppSelector } from 'hooks'
import { useNavigate } from 'react-router-dom'
import { getSearchActiveIndex, setCoor } from 'states/weather'
import { ICoordinates } from 'types/recentSearch'
import { storage } from 'utils/storage'
import styles from './search.module.scss'
import cx from 'classnames'

interface Props {
  data: ICoordinates
  listIndex: number
}

const AddressList = ({ data, listIndex }: Props) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const activeIndex = useAppSelector(getSearchActiveIndex)

  const handleAddress = () => {
    dispatch(setCoor({ lat: data.y, lon: data.x, name: data.address_name }))
    storage(data)
    navigate('/')
  }
  return (
    // <li className={styles.addressItem}>
    <li className={cx({ [styles.active]: listIndex === activeIndex })}>
      <button onClick={handleAddress} className={styles.addressText} type='button'>
        {data.address_name}
      </button>
    </li>
  )
}

export default AddressList
