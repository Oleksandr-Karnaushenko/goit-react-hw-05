import { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { getMovies } from '../components/apiService/movies';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const url = `movie/${movieId}`;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const results = await getMovies(url, '');
        console.log(results);
        setMovie(results);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <img src="" alt="img" />
        <h2>
          {movie.title}
          {movie.release_date}
        </h2>
        <p>User Score{movie.vote_average}</p>
        <h3>Overviev</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <ul>
          {/* {movie.genres.map(genre => {
            return (
              <li key={genre.id}>
                <p>{genre.name}</p>
              </li>
            );
          })} */}
        </ul>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}
