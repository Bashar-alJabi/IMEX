import { AppBar, Container, Toolbar } from '@mui/material/';
import { social } from "./data";
import styles from './footer.module.css';

const Footer = () => {
	return (
        <AppBar position="static">
            <Toolbar>
                <Container fixed>
                    <footer className="w-100 d-flex justify-content-between align-items-center my-3">
                        <p className={styles.text}>IMEX ©2024 - All right reserved</p>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            {social.map(media =>
                                <img key={media.id} src={media.img} alt={media.name} className={styles.icon} />
                            )}
                        </div>
                    </footer>
                </Container>
            </Toolbar>
        </AppBar>
	);
};

export default Footer;