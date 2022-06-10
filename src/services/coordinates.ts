import axios, { CancelTokenSource } from 'axios'

const SEARCH_BASE_URL = `https://dapi.kakao.com/v2/local/search/address.json`

const API_KEY = process.env.REACT_APP_KAKAO_API_KEY

let call: CancelTokenSource

export const getCoordinates = (searchVal: string) => {
  if (call) call.cancel('cancel')
  call = axios.CancelToken.source()
  return axios.get(SEARCH_BASE_URL, {
    headers: { Authorization: `KakaoAK ${API_KEY} ` },
    cancelToken: call.token,
    params: {
      query: searchVal,
    },
    timeout: 10000,
  })
}
