import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="fixed top-0 bg-slate-700 w-full p-4">
      <h1 className="text-white uppercase tracking-wide text-2xl">
        <Link to="/">Dicoding Forum App</Link>
      </h1>
    </header>
  );
}

export default Header;
