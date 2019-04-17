import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="row">
    <Link
      className="nav-item nav-link"
      to="/home"
    >
    Home
    </Link>
    <Link
      className="nav-item nav-link"
      to="/add"
    >
    Add
    </Link>
  </nav>
);

export default Navigation;
