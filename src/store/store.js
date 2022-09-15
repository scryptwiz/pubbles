import { configureStore } from '@reduxjs/toolkit'
import slice from './slice'

export  const  Store = configureStore({
    reducer : { mainStore : slice }
})