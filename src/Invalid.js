import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Invalid extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <h1 style={{ textAlign: 'center' }}>Oh Snap! Page not found!</h1>
        </div>
        <Link
          to="/schools"
          className="nav-link"
          style={{ textAlign: 'center' }}
        >
          return to Schools
        </Link>
      </Fragment>
    );
  }
}
