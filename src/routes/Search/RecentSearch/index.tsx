import { useState } from 'react'
import styles from './recentSearch.module.scss'
import store from 'store'
import { ICoordinates } from 'types/recentSearch'
import RcentItem from './RecentItem'
import Empty from 'components/Empty'

const RecentSearch = () => {
  const [recentSearchData, setRecentSearchData] = useState<ICoordinates[]>(store.get('recentdata'))

  const handleRemoveRecentData = (addressName: string) => {
    const filterData = recentSearchData.filter((item) => item.address_name !== addressName)
    store.set('recentdata', filterData)
    setRecentSearchData(filterData)
  }
  return (
    <div className={styles.recentSearchWrap}>
      <h2>최근 검색지역</h2>
      <ul className={styles.recentList}>
        {!recentSearchData || recentSearchData.length === 0 ? (
          <Empty text='최근 검색어가 없어요!' />
        ) : (
          recentSearchData.map((local) => (
            <RcentItem handleRemoveRecentData={handleRemoveRecentData} local={local} key={local.address_name} />
          ))
        )}
      </ul>
    </div>
  )
}

export default RecentSearch
