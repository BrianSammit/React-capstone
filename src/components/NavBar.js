import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navbar">
    <h1>Pokedex</h1>
    <ul>
      <li>
        <Link className="link" to="/">
          Home
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
