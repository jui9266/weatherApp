import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'

interface WeaherSatae {
  location: {
    name: string
    lat: string
    lon: string
  }
  searchActiveIndex: number
}

const INITIAL_STATE: WeaherSatae = {
  location: {
    name: '서울 강남구',
    lat: '37.5173319258532',
    lon: '127.047377408384',
  },
  searchActiveIndex: 0,
}
const weatherSlice = createSlice({
  name: 'weather',
  initialState: INITIAL_STATE,
  reducers: {
    setCoor: (state: WeaherSatae, action: PayloadAction<{ lat: string; lon: string; name: string }>) => {
      state.location = action.payload
    },
    setSearchActiveIndex: (state: WeaherSatae, action: PayloadAction<number>) => {
      state.searchActiveIndex = action.payload
    },
  },
})
export const { setCoor, setSearchActiveIndex } = weatherSlice.actions

export default weatherSlice.reducer

// Selector =====================
export const getNowLocation = (state: RootState): { lat: string; lon: string; name: string } | undefined =>
  state.weather.location
export const getSearchActiveIndex = (state: RootState): number => state.weather.searchActiveIndex
