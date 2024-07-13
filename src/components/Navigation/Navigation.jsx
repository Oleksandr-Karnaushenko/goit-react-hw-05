import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation..module.css';

const navLinkCss = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <header>
      <nav>
        <NavLink to="/" className={navLinkCss}>
          Home
        </NavLink>
        <NavLink to="/movies" className={navLinkCss}>
          About
        </NavLink>
      </nav>
    </header>
  );
}
