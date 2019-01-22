import React, {Component} from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from "react-router-dom"
import Key from "./key";
import Home from "./main";
import PureComponentPage from "./pureComponent";

class App extends Component {
  render() {
    return (
      <Router>
        <div id="App">
          <header>
            <ul>
              <li>
                <Link to="/">Index</Link>
              </li>
              <li>
                <Link to="/pure">Pure Component</Link>
              </li>
              <li>
                <Link to="/key">Key</Link>
              </li>
            </ul>
          </header>
          <div id="content">
            <Route path="/" exact component={Home}/>
            <Route path="/pure" component={PureComponentPage} />
            <Route path="/key" component={Key}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
