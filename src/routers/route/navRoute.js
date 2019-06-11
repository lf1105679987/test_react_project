import React from 'react';
import { Route, Link } from 'react-router-dom';

// Matching highlighted routes
export default ({ to, label, children, exact=true }) =>
  <Route
    path={ to }
    exact={ exact }
    children={({ match, history }) =>
      <Link
        to={ to }
        style={ match ? { color: '#f00' } : null }
      >
        { label || children }
      </Link>
    }
  />;