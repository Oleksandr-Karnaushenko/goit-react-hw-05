import { useEffect, useState } from 'react';
import { getMovies } from '../apiService/movies';
import { useParams } from 'react-router-dom';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const url = `movie/${movieId}/reviews`;

  useEffect(() => {
    async function fetchData() {
      try {
        const { results } = await getMovies(url, '');
        console.log(results);
        setReviews(results);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
