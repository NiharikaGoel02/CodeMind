import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">CodeMind</Link>
        <div>
          {token ? (
            <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Link className="btn btn-outline-light me-2" to="/">Register</Link>
              <Link className="btn btn-outline-light" to="/login">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
