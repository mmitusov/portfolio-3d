import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: {count: number} = {
  count: 1
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  
  reducers: {
    resetCounter: (state) => {
      state.count = 0;
    },
    setIncrementCount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    setDecrementCount: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },

  // You can define your selectors here. These selectors receive the slice state as their first argument.
  selectors: {
    selectCount: (test) => test.count,
  },
})

export const { resetCounter, setIncrementCount, setDecrementCount } = testSlice.actions;
export const { selectCount } = testSlice.selectors;
export default testSlice.reducer;