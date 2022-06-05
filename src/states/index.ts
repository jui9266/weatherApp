import { configureStore } from '@reduxjs/toolkit'

import weather from './weather'

export const store = configureStore({
  reducer: {
    weather,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
