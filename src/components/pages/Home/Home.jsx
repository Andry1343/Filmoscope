import { Title } from './Home.styled';
import { useEffect, useState } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { getTrendingMovies } from 'components/getMovies';
import { Button } from '../Movies/Movies.styled';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
 // const [disabled, setDisabled] = useState(false)
 // const [enabled, setEnabled] = useState(true)

  const loadMoreBtn = () => {
    setPage(prevPage => prevPage + 1);
  };

  const loadLessBtn = () => {
    if (page >= 2) {
      setPage(prevPage => prevPage - 1);      
     // setDisabled(prevDisabled => prevDisabled = false)
    }
  };

  useEffect(() => {
    getTrendingMovies(page)
      .then(movies => setMovies(movies.data.results))
      .catch(error => setError(error.message));
  }, [page]);


  return (
    <>
      <Title>Trending today</Title>
      {error && 'Something wrong, reload the page'}
      <MovieList movies={movies} />
      <div
        style={{
          display: 'flex',
          marginBottom: '20px',
          justifyContent: 'center',
        }}
      >
        <Button type="button"  onClick={loadLessBtn}>
          <SlArrowLeft></SlArrowLeft>
        </Button>
        <Button type="button" onClick={loadMoreBtn}>
          <SlArrowRight></SlArrowRight>
        </Button>
      </div>
    </>
  );
};

export default Home;
