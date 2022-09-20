import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/userSlice'
import {userApi} from './services/usersService'

export const store = configureStore({
  reducer: {
    user:userSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})