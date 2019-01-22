import React from "react";
import "./index.css"

class Item extends React.PureComponent {
  render() {
    console.log('render ', this.props.name);
    return (
      <div className="item">{this.props.name}</div>
    );
  }

  componentDidUpdate() {
    console.log(`Item ${this.props.name} update`)
  }

  componentDidMount() {
    console.log(`Item ${this.props.name} mount`)
    //request data
  }
}

export default class Key extends React.PureComponent {

  state = {
    list: ['react', 'vue', 'angular']
  };

  onUnshift = () => {
    let list = [...this.state.list];
    list.unshift('emberjs');
    this.setState({list})
  };

  onPush = () => {
    let list = [...this.state.list];
    list.push('emberjs');
    this.setState({list})
  };

  onShift = () => {
    let list = [...this.state.list];
    list.shift();
    this.setState({list});
  };

  render() {
    return (
      <div className="key-page">
        <div className="actions">
          <button onClick={this.onUnshift}>unshift</button>
          <button onClick={this.onPush}>push</button>
          <button onClick={this.onShift}>shift</button>
        </div>


        {this.state.list.map((l, index) => (
          <Item name={l} key={index}/>
        ))}


      </div>
    );
  }
}
