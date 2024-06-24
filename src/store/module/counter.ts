import { createSlice } from '@reduxjs/toolkit'

const counterReducer = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'hello redux'
  },
  reducers: {
    changeMessageAction(state, { payload }) {
      state.message = payload
    }
  }
})

export const {changeMessageAction} = counterReducer.actions

export default counterReducer.reducer
