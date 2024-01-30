import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from './slices/moviesSlice'
import themeSlice from './slices/themeSlice'

export const store = configureStore({
    reducer: {
        theme: themeSlice,
        movies: moviesSlice,
    }
})