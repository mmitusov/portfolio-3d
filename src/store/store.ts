// Basic notes
// Redux setup for a Next js is a bit tricky. The reason is that Redux is designed to work on the client side. But the Next.js in build on the server side by default
// Therefore besides creating a store, slices and wrapping our all app with it - we also need to handle a Next.js SSR behaviour 
// For that matter will first create a 'use client' component, so it renders only on the client side. Lets call it "provider.tsx"
// This way our provider would only start to hydrate the application with the state on the client side. Thus nothing will break 
// Basically it ensures that the Redux store is available during the server-side rendering process and that the state can be properly hydrated on the client side
// Also, since from Next.js 13 we don't have "index" or "_app" file, where exactly we should wrap our app? The answear is - "layout.tsx"
// Beacause "layout.tsx" is basically the very root of our application
// So, the next step is to wrap out app body in "layout.tsx" with the "provider.tsx" that would only start to render on the client side
// P.S. Whenever we use Redux dispatch or get data, these components should be client side as well. P.P.S. Need to check this fact

// Additional features
// After creating store, slices and wrapping app with the provider, lets create 2 custom hooks to simplify using Redux actions and getting state
// We'll name them "useGetAction.tsx" and "useGetState.tsx"
// Details how they work would be described inside of them

import { configureStore } from '@reduxjs/toolkit'
import testReducer from './slices/test';
import contactFormReducer from './slices/contactForm';

export const makeStore = () => {
  return configureStore({
    // Key should be equal to the name of this slice!
    reducer: {
      test: testReducer,
      contactForm: contactFormReducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
