import { useEffect, useState } from 'react';
import { getMovies } from '../apiService/movies';
import { useParams } from 'react-router-dom';

export default function MovieCast() {
  const { movieId } = useParams();
  const [casts, setCast] = useState([]);
  const url = `movie/${movieId}/credits`;

  useEffect(() => {
    async function fetchData() {
      try {
        const { cast } = await getMovies(url, '');
        const castsArr = [];
        for (let index = 0; index < 10; index++) {
          castsArr.push(cast[index]);
        }
        setCast(castsArr);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchData();
  }, []);
  return (
    <div>
      <ul>
        {casts.map(cast => {
          return (
            <li key={cast.id}>
              <img src="" alt="photo" />
              <p>{cast.name}</p>
              <p>{cast.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
