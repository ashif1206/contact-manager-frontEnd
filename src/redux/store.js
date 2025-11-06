import {configureStore} from '@reduxjs/toolkit'
import contactSlice from './slice'

const store = configureStore({
   reducer:{
    contact:contactSlice
   }
});

export default store;