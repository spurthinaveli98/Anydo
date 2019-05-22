import React, { Component } from "react";
import alarm from "../images/alarm.svg";
import "./AddReminder.css";

class AddReminder extends Component {
  constructor(props){
    super(props);
    this.state = {
   
    };
  }

  render() {
   
    return (
      <div className="AddReminder">
      <div className="AddReminderCard">
      <img src={alarm} alt="alarm"></img>
       <p>Add Reminder</p>
      </div>     
      </div>
    );
  }
}

export default AddReminder;
