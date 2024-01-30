import { AppBar, Button, Container, Toolbar } from '@mui/material/';
import { Link } from 'react-router-dom';
import DarkLightMode from '../DarkLightMode/DarkLightMode';
import { pages } from "./data";
import styles from './navbar.module.css';

const NavbarLinks = () => {
	return (
		<AppBar position="static">
			<Container fixed>
				<Toolbar >
					<div className='w-100 d-flex justify-content-between align-items-center'>
						<Link to='/' style={{fontFamily: 'monospace'}} className={styles.links}>IMEX</Link>
						<div className='d-flex justify-content-center align-items-center gap-1'>
							<DarkLightMode />
							{pages.map((page) => (
								<Link key={page.id} to={page.url}>
									<Button className='text-white'>{page.title}</Button>
								</Link>
							))}
						</div>
					</div>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default NavbarLinks;