import axios, { CancelTokenSource } from 'axios'
import store from 'store'
import { ICoordinates } from 'types/recentSearch'

const SEARCH_BASE_URL = `https://dapi.kakao.com/v2/local/search/address.json`

const API_KEY = process.env.REACT_APP_KAKAO_API_KEY

let call: CancelTokenSource

interface Props {
  searchVal: string
}

export const getCoordinates = (searchVal: string) => {
  if (call) call.cancel('cancel')
  call = axios.CancelToken.source()
  return axios
    .get(SEARCH_BASE_URL, {
      headers: { Authorization: `KakaoAK ${API_KEY} ` },
      cancelToken: call.token,
      params: {
        query: searchVal,
      },
      timeout: 10000,
    })
    .then((res) => {
      if (!store.get('recentdata')) {
        store.set('recentdata', [res.data.documents[0]])
      } else {
        const storeData: [] = store.get('recentdata')
        const index = storeData.findIndex(
          (list: ICoordinates) => list.address_name === res.data.documents[0].address_name
        )
        const filterData = storeData.filter((item, i) => i < 4)
        index === -1 && store.set('recentdata', [res.data.documents[0], ...filterData])
      }

      return res.data.documents[0]
    })
    .catch((thrown) => {
      if (axios.isCancel(thrown)) {
        // eslint-disable-next-line no-console
        console.log(`%c Request ${thrown.message}`, 'background: #bd71ff; color:#eaeaea')
      }
    })
}
