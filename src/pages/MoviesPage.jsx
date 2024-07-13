import { useState } from 'react';
import { getMovies } from '../components/apiService/movies';
import MovieList from '../components/MovieList/MovieList';

export default function MoviesPage() {
  const url = 'search/movie';
  const [movies, setMovies] = useState([]);
  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const query = `?query=${form.query.value}`;

    async function fetchData() {
      try {
        const { results } = await getMovies(url, query);
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchData();

    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Login</button>
      </form>

      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
