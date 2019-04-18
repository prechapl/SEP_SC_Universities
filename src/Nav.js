import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Nav extends Component {
  render() {
    const pathname = location.pathname;
    const links = ['/schools', '/students', '/addSchool', '/addStudent'];

    return (
      <nav className="navbar sticky-top navbar-light bg-white mt-3">
        <div className="navBar-brand d-flex flex-row">
          <img
            src="http://i65.tinypic.com/14133p0.png"
            className="d-inline-block mb-1 mr-md-3 img-fluid"
            alt="Loading..."
          />
          <h1 className="ml-2" style={{ fontFamily: 'meatball, sans-serif' }}>
            South Carolina Universities
          </h1>
        </div>

        <ul className="nav">
          {links.map(link => (
            <li className="nav-item" key={link}>
              <Link
                to={link}
                className={`nav-link text-secondary ${
                  link === pathname ? ' active' : ''
                }`}
              >
                <p>
                  <a href="#" className="text-secondary">
                    {link.slice(1)}
                  </a>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
