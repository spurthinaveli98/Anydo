import React, { Component } from "react";
import './DisplayTasks.css';

var i=0;
class DisplayTasks extends Component {

    constructor(props){
      super(props);
      this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        return <li>{item[i++]}</li>
      }

      render() {
        var taskEntries = this.props.tasks;
        var listItems = taskEntries.map(this.createTasks);
    
         return (
          <ul className="theList">
          {listItems}
          </ul>
        );
      }
    }
    
    export default DisplayTasks;