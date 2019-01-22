import React from "react";
import './inde.css'

class ItemA extends React.PureComponent {
  render() {
    const {item, onClick} = this.props;

    console.log(`item ${item.id} render`);

    return (
      <div className='item'>
        <div>{item.id}: {item.name}</div>
        <div>{item.count}</div>
        <div>
          <button onClick={onClick}>Add</button>
        </div>
      </div>
    );
  }
}

class ListA extends React.PureComponent {
  state = {
    data: [
      {id: 1, name: 'angular', count: 0},
      {id: 2, name: 'react', count: 0},
      {id: 3, name: 'vue', count: 0},
    ]
  };

  onAdd = (id) => () => {
    this.setState(({data}) => ({
      data: data.map(d => {

        if (d.id === id) {
          return {
            ...d,
            count: d.count + 1
          }
        }
        return d

      })
    }))
  };

  render() {
    return (
      <div className="bind-page-list">
        {this.state.data.map((item) => (
          <ItemA
            onClick={this.onAdd(item.id)}
            item={item}
            key={item.id}
          />
        ))}
      </div>
    );
  }
}

//List b
class ItemB extends React.PureComponent {

  onAddClick = () => {
    this.props.onClick(this.props.item.id)
  };

  render() {
    const {item} = this.props;

    console.log(`item ${item.id} render`);

    return (
      <div className='item'>
        <div>{item.id}: {item.name}</div>
        <div>{item.count}</div>
        <div>
          <button onClick={this.onAddClick}>Add</button>
        </div>
      </div>
    );
  }
}

class ListB extends React.PureComponent {
  state = {
    data: [
      {id: 1, name: 'angular', count: 0},
      {id: 2, name: 'react', count: 0},
      {id: 3, name: 'vue', count: 0},
    ]
  };

  onAdd = (id) => {
    this.setState(({data}) => ({
      data: data.map(d => {

        if (d.id === id) {
          return {
            ...d,
            count: d.count + 1
          }
        }
        return d

      })
    }))
  };

  render() {
    return (
      <div className="bind-page-list">
        {this.state.data.map((item) => (
          <ItemB
            onClick={this.onAdd}
            item={item}
            key={item.id}
          />
        ))}
      </div>
    );
  }
}

export default class BindFunctionPage extends React.PureComponent {
  render() {
    return (
      <div className='bind-page'>
        <ListA/>
        <ListB/>
      </div>
    );
  }

}
