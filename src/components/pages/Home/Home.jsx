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
  const [totalPages, setTotalPages] = useState(1);

  const BtnScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const loadMoreBtn = () => {
    setPage(prevPage => prevPage + 1);
    BtnScrollUp();
  };

  const loadLessBtn = () => {
    if (page >= 2) {
      setPage(prevPage => prevPage - 1);
    }
    BtnScrollUp();
  };

  const handlePageClick = pageNumber => {
    setPage(pageNumber);
    BtnScrollUp();
  };

  const renderPageNumbers = () => {
    const maxPageNumbers = 6;
    const halfMaxPageNumbers = Math.floor(maxPageNumbers / 2);

    let startPageNumber = page - halfMaxPageNumbers;
    let endPageNumber = page + halfMaxPageNumbers;

    if (startPageNumber < 1) {
      startPageNumber = 1;
      endPageNumber = maxPageNumbers;
    }

    if (endPageNumber > totalPages) {
      endPageNumber = totalPages;
      startPageNumber = Math.max(1, endPageNumber - maxPageNumbers + 1);
    }

    return Array.from(
      { length: endPageNumber - startPageNumber + 1 },
      (_, index) => {
        const pageNumber = startPageNumber + index;
        return (
          <Button
            key={pageNumber}
            active={pageNumber === page}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </Button>
        );
      }
    );
  };

  useEffect(() => {
    getTrendingMovies(page)
      .then(movies => {
        setMovies(movies.data.results);
        setTotalPages(movies.data.total_pages);
      })
      .catch(error => setError(error.message));
  }, [page]);

  return (
    <>
      <Title>Trending today</Title>
      {error && 'Something wrong, reload the page'}
      <MovieList movies={movies} />
      {movies.length > 0 && (
        <div
          style={{
            display: 'flex',
            marginBottom: '20px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button type="button" onClick={loadLessBtn}>
            <SlArrowLeft />
          </Button>
          {renderPageNumbers()}
          <Button type="button" onClick={loadMoreBtn}>
            <SlArrowRight />
          </Button>
        </div>
      )}
      {totalPages > 1 && (
        <div style={{ textAlign: 'center' }}>
          <p>
            Page {page} of {totalPages}
          </p>
        </div>
      )}
    </>
  );
};

export default Home;
