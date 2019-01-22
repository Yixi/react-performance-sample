import React from "react";
import './index.css'

class Normal extends React.Component {
  state = {
    list: ['a', 'b', 'c']
  }

  onPush = () => {
    const list = this.state.list
    list.push('d')
    this.setState({list})
  }

  onSlice = () => {
    const list = this.state.list
    list.splice(1, 1)
    this.setState({list})
  }

  render() {
    console.log('Normal component render')
    return (
      <div className="item">
        <div>Normal Component</div>
        <div>{this.state.list.join(',')}</div>
        <div>
          <button onClick={this.onPush}>push</button>
          <button onClick={this.onSlice}>slice</button>
        </div>
      </div>
    );
  }
}


class Pure extends React.PureComponent{

  state = {
    list: ['a', 'b', 'c']
  };

  onPush = () => {
    const list = this.state.list
    list.push('d')
    this.setState({list})
  }

  onPush2 = () => {
    this.setState({
      list: this.state.list.concat(['d'])
    })
  }

  onSlice = () => {
    const list = this.state.list
    list.splice(1, 1)
    this.setState({list})
  }

  onSlice2 = () => {
    const list = [...this.state.list]
    list.splice(1, 1)
    this.setState({list})
  }

  render() {
    console.log('Pure Component render');
    return (
      <div className="item">
        <div>Pure Component</div>
        <div>{this.state.list.join(',')}</div>
        <div>
          <button onClick={this.onPush}>push</button>
          <button onClick={this.onSlice}>slice</button>
          <br />
          <button onClick={this.onPush2}>push 2</button>
          <button onClick={this.onSlice2}>slice 2</button>
        </div>
      </div>
    );
  }
}

export default class PureComponentPage extends React.Component {

  onForceUpdate = () => {
    this.forceUpdate()
  };

  render() {
    return (
      <div className="pure-page">
        <div className="actions">
          <button onClick={this.onForceUpdate}>Force update</button>
        </div>
        <Normal/>
        <Pure/>
      </div>
    );
  }
}


