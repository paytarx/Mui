import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}
const initialState: CounterState = {
  value: 1,
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState, 
  reducers: {
    up: (state) => {
      state.value += 1
    },
    down: (state) => {
      state.value -= 1
    },
    amount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})
export const { up, down, amount } = counterSlice.actions

export default counterSlice.reducer