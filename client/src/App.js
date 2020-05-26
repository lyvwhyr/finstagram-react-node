import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home.js'
import User from './components/User.js'
import Post from './components/Post.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:userId" component={User} />
          <Route exact path="/p/:postId" component={Post} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
