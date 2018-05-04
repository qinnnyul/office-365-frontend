import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import EditPage from './pages/EditPage/EditPage';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/edit" component={EditPage} />
    </div>
  </Router>
);
