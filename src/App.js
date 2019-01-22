import React, {Component} from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from "react-router-dom"
import Key from "./key";
import Home from "./main";
import PureComponentPage from "./pureComponent";
import BindFunctionPage from "./bindFunction";
import RenderChainPage from "./renderChain";

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
                <Link to="/chain">chain</Link>
              </li>
              <li>
                <Link to="/pure">Pure Component</Link>
              </li>
              <li>
                <Link to="/key">Key</Link>
              </li>
              <li>
                <Link to="/bind">Bind</Link>
              </li>
            </ul>
          </header>
          <div id="content">
            <Route path="/" exact component={Home}/>
            <Route path="/chain" component={RenderChainPage} />
            <Route path="/pure" component={PureComponentPage} />
            <Route path="/key" component={Key}/>
            <Route path="/bind" component={BindFunctionPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
