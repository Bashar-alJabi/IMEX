import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Website from "./pages/Website/Website";

export default function App() {

	const darkTheme = useSelector(state => state.theme)

	const themes = createTheme({
		palette: {
			mode: darkTheme ? "dark" : "light",
		},
	});

	return (
		<ThemeProvider theme={themes}>
			<CssBaseline />
			<Routes>
				<Route element={<Website />}>
					<Route path='/' element={<Home />} />
					<Route path='/movies' element={<Movies />} />
				</Route>
			</Routes>
		</ThemeProvider>
	);
}