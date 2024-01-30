import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
	name: "theme",
	initialState: true,
	reducers: {
		toggleDark: (state) => {
			return !state;
		},
	},
});

export const { toggleDark } = themeSlice.actions;

export default themeSlice.reducer;