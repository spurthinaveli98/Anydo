import React, { Component } from 'react';
import './DisplayList.css';

class DisplayList extends Component {

constructor(props){
  super(props);

  this.createTasks = this.createTasks.bind(this);
}

  createTasks(item) {
    return <div className="li" onClick={() => this.display(item.list,item.key)}
    key={item.key}>{item.list}</div>
  }

  display(list,key) {
    this.props.display(list,key);
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

     return (
      <div className = "ul">
      {listItems}
      </div>
    );
  }
}

export default DisplayList;
