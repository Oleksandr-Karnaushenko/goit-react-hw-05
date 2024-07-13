import { useEffect, useState } from 'react';
import { getMovies } from '../components/apiService/movies';
import MovieList from '../components/MovieList/MovieList';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const url = 'trending/movie/day';
  const query = '?language=en-US';

  useEffect(() => {
    async function fetchData() {
      try {
        const { results } = await getMovies(url, query);
        setTrendingMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={trendingMovies} />
    </div>
  );
}
