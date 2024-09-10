import {configureStore} from '@reduxjs/toolkit'
import Cartsl from './cartslice/Cartsl'

export const store = configureStore({
    reducer:{
        cart:Cartsl
    },
    devTools:true
})