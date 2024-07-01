import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface formTyping {
  name: string
  email: string
  message: string
}

const initialState: formTyping = {
  name: "",
  email: "",
  message: "",
}

export const testSlice = createSlice({
  name: 'contactForm',
  initialState,
  
  reducers: {
    resetContactForm: (state) => {
      state.name = "";
      state.email = "";
      state.message = "";
    },
    setContactForm: (state, action: PayloadAction<{ name: string, value: string }>) => {
      (state as any)[action.payload.name] = action.payload.value; // (state as any) - explicitly typecast the state object to allow dynamic property access
    }
  },
})

export const { resetContactForm, setContactForm } = testSlice.actions;
export default testSlice.reducer;