import { Box, Card, CardActionArea, CardContent, CardMedia, Container, FormControl, InputLabel, MenuItem, Pagination, Select, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../../rtk/slices/moviesSlice';
import { catsNames } from './data';
import styles from './movies.module.css';

const Movies = () => {

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [cat, setCat] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);

    const movies = useSelector(state => state.movies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
        setLoading(false);
    }, [dispatch]);

    const filteredMovies = movies.filter(movie =>
        (movie.show.name.toLowerCase().includes(search.toLowerCase()))
        &&
        (category === '' || category === 'All' || movie.show.genres.includes(category))
    )

    const total = filteredMovies.length;
    const itemsPerPage = 3;
    const pageCount = Math.ceil(total / itemsPerPage);

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const finalMovies = filteredMovies.slice(start, end);

    const handlePageClick = (e, value) => {
		setPage(value);
	};

    const handleSelect = (e) => {
        setCat(e.target.value);
    };

    const handleGetMovie = (e) => {
        setCategory(e.target.dataset.cat)
    };

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

	return (
        <Container className='d-flex flex-column justify-content-between gap-4 my-4'>
            <div className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-4'>
                <input type='search' placeholder='Search...' className={styles.search} id='search' onChange={handleSearch}/>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Cat</InputLabel>
                        <Select id="demo-simple-select" labelId="demo-simple-select-label" label="Cat" value={cat} onChange={handleSelect}>
                            {catsNames.map(catName =>
                                <MenuItem key={catName.id} value={catName.id} data-cat={catName.name} onClick={handleGetMovie}>{catName.name}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </Box>
            </div>
            {loading ?
                <Spinner animation="border" className='m-auto' />
            :
                    <div className='d-flex justify-content-center align-items-center gap-3 flex-wrap'>
                        {finalMovies && finalMovies.map(movie =>
                            <Card key={movie.id} sx={{ width: 300, }}>
                                <Link to={movie.show.url} target='_blank' className={styles.link}>
                                    <CardActionArea>
                                        <CardMedia component="img" height="140" image={movie.show.image.medium} alt={movie.show.name} />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" className={styles.title}>{movie.show.name}</Typography>
                                            <Typography variant="body2" color="text.secondary" className={styles.summary}>{movie.show.summary}</Typography>
                                            <Typography variant="body2" className={styles.genres}>
                                                {movie.show.genres.length > 0 ? movie.show.genres.join` ` : 'Unknown'}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Link>
                            </Card>
                        )}
                    </div>
            }
            <Stack spacing={2} className='mx-auto'>
                <Pagination shape="rounded" showFirstButton showLastButton count={pageCount} onChange={handlePageClick} />
            </Stack>
        </Container>
	);
};

export default Movies;