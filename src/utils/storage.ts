import { ICoordinates } from 'types/recentSearch'
import store from 'store'

export const storage = (data: ICoordinates) => {
  if (!store.get('recentdata')) {
    store.set('recentdata', [data])
  } else {
    const storeData: [] = store.get('recentdata')
    const index = storeData.findIndex((list: ICoordinates) => list.address_name === data.address_name)
    const filterData = storeData.filter((_, i) => i < 4)
    index === -1 && store.set('recentdata', [data, ...filterData])
  }
}
