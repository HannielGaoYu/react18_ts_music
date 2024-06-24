import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './module/counter'
import recommendReducer from '@/views/discover/c-views/recommend/store/recommend'
import { TypedUseSelectorHook, shallowEqual, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer
  }
})

type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type Dispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => Dispatch = useDispatch
export const shallowEqualApp = shallowEqual


export default store
