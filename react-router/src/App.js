import React, { Component } from 'react';
import Navbar from './components/NavBar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Content from './components/Content';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/content" component={Content} />
            <Route switch path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
