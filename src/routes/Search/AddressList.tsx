import { useAppDispatch } from 'hooks'
import { useNavigate } from 'react-router-dom'
import { setCoor } from 'states/weather'
import { ICoordinates } from 'types/recentSearch'
import { storage } from 'utils/storage'
import styles from './search.module.scss'

interface Props {
  data: ICoordinates
}

const AddressList = ({ data }: Props) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleAddress = () => {
    dispatch(setCoor({ lat: data.y, lon: data.x, name: data.address_name }))
    storage(data)
    navigate('/')
  }
  return (
    <li className={styles.addressItem}>
      <button onClick={handleAddress} className={styles.addressText} type='button'>
        {data.address_name}
      </button>
    </li>
  )
}

export default AddressList
