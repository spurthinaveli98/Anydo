import React, { Component } from "react";
import share from "../images/note.svg";
import "./TaskName.css";

class TaskName extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
   
    return (
      <div className="TaskName">
      <div className="TaskNameCard">
      <img src={share} alt="TaskName"></img>
       <p>{this.props.listName}</p>
      </div>     
      </div>
    );
  }
}

export default TaskName;
