import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navbar">
    <ul>
      <li>
        <Link className="link" to="/">
          <h1>Pokedex</h1>
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
