import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("moviesSlice/fetchMovies", async () => {
    const res = await fetch("https://api.tvmaze.com/schedule/");
    const data = await res.json();
    return data;
})

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export default moviesSlice.reducer;