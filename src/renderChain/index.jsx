import React from "react";
import './index.css'

class Layer3 extends React.Component {
  render() {
    console.log('level 3 render')
    return (
      <div>
        Layer level 3
      </div>
    );
  }
}

class Layer2 extends React.Component {
  render() {
    console.log('level 2 render')
    return (
      <div>
        Layer level 2
        <Layer3/>
      </div>
    );
  }
}

class Layer extends React.Component {
  render() {
    console.log('level 1 render')
    return (
      <div>
        Layer level 1
        <Layer2/>
      </div>
    );
  }
}

export default class RenderChainPage extends React.Component {
  state = {
    switch: false
  }

  onClick = () => {
    this.setState({
      switch: !this.state.switch
    })
  }

  render() {
    return (
      <div className="chain-page">
        level Root  <button onClick={this.onClick}>Switch</button>
        <Layer/>
      </div>
    );
  }
}
