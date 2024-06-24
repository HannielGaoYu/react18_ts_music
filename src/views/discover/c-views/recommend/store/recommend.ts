import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchBannerData } from '../service/recommend'

export const fetchRecommendDataAction = createAsyncThunk(
  'recommendData',
  (_, { dispatch }) => {
    fetchBannerData().then(res => {
      dispatch(changeBannersAction(res.banners))
    })
  }
)

interface IRcommendState {
  banners: any[]
}

const initialState: IRcommendState = {
  banners: []
}

export const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, {payload}) {
      state.banners = payload
    }
  },
  extraReducers() {}
})

export const {changeBannersAction} = recommendSlice.actions
export default recommendSlice.reducer
