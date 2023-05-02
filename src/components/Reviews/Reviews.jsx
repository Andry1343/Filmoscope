import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../getMovies';
import { Info, /* Trailer */ } from './Reviews.styled';
/* import { getTrailer } from '../getMovies'; */

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  /* const handleTrailerClick = () => {
    getTrailer(Number(movieId));
  }; */

  useEffect(() => {
    getMovieReviews(Number(movieId))
      .then(reviews => setReviews(reviews.data.results))
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <>
    {/* <Trailer onClick={handleTrailerClick}>Trailer</Trailer> */}
      {error && 'Something wrong, please reload the page...'}
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews}  />
      ) : (
        <Info>There is no reviews yet...</Info>
      )}
    </>
  );
};

export default Reviews;
