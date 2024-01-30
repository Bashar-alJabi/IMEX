import { useEffect, useState } from 'react';
import { Carousel, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../../rtk/slices/moviesSlice';
import styles from './home.module.css';

const Home = () => {

	const [loading, setLoading] = useState(true);

	const movies = useSelector(state => state.movies)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchMovies());
		setLoading(false);
	}, [dispatch])

	let randomMovies = Math.floor(Math.random() * movies.length)
	let nextMovies = randomMovies + 3;
	let customMovies = movies.slice(randomMovies, nextMovies);

	return (
		<>
			{loading ?
				<Spinner animation="border" className='m-auto' />
				:
				<Carousel fade data-bs-theme="dark" className='flex-grow-1'>
					{customMovies && customMovies.map(movie =>
						<Carousel.Item interval={2000} key={movie.id} className={styles.slider}>
							<img className="w-100 h-100 object-fit-cover" src={movie.show.image.original} alt={movie.show.name} />
							<Link to={movie.show.url} target='_blank'>
								<Carousel.Caption className={styles.caption}>
									<h2 className='text-black'>{movie.show.name}</h2>
								</Carousel.Caption>
							</Link>
						</Carousel.Item>
					)
				}
				</Carousel>
			}
		</>
	);
};

export default Home;