import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavbarLinks from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";

export default function App() {

	const darkTheme = useSelector(state => state.theme)

	const themes = createTheme({
		palette: {
			mode: darkTheme ? "dark" : "light",
		},
		transitions: {
			duration: {
				standard: 300,
			},
			easing: {
				easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
			},
		},
	});

	return (
		<ThemeProvider theme={themes}>
			<CssBaseline />
			<div className="min-vh-100 d-flex flex-column justify-content-between">
				<NavbarLinks />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/movies' element={<Movies />} />
					</Routes>
				<Footer />
			</div>
		</ThemeProvider>
	);
}