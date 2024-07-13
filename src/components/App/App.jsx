import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';

export default function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
}
