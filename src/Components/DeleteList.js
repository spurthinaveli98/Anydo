import React, { Component } from 'react';
import './DeleteList.css';

class DeleteList extends Component {

constructor(props){
  super(props);

  this.createTasks = this.createTasks.bind(this);
}

  createTasks(item) {
    return <div className="li" onClick={() => this.delete(item.key)}
    key={item.key}><p className="p">{item.list}</p><div className="deleteIcon"><img  src="https://img.icons8.com/small/16/000000/delete-forever.png"></img></div></div>
  }


  delete(key) {
    this.props.delete(key);
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

export default DeleteList;
