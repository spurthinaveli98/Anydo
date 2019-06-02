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
      {/* <img src={share} alt="TaskName"></img> */}
      <svg className="taskName" width="30" height="30" viewBox="0 0 30 30"><g fill="none" fill-rule="evenodd"><path d="M0 0h30v30H0z"></path><rect width="20.5" height="21.5" x="4.75" y="3.75" stroke="currentColor" stroke-width="1.5" rx="1.25"></rect><path fill="currentColor" d="M7 7h15v1H7zM7 10h8v1H7zM7 13.25h10.5v1H7zM7 16.25h5.25v1H7z"></path></g></svg>
       <p className="text">{this.props.listName}</p>
      </div>     
      </div>
    );
  }
}

export default TaskName;
