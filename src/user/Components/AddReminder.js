import React, { Component } from "react";
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
      <svg className="addReminder" width="30" height="30" viewBox="0 0 25 25"><g fill="currentColor" fill-rule="nonzero"><path d="M18.158 16.474H15a.775.775 0 0 1-.79-.79v-4.052c0-.448.343-.79.79-.79s.79.342.79.79v3.263h2.368c.447 0 .79.342.79.79 0 .447-.343.789-.79.789z"></path><path d="M15 23.868c-4.632 0-8.421-3.79-8.421-8.42 0-4.632 3.79-8.422 8.421-8.422 4.632 0 8.421 3.79 8.421 8.421 0 4.632-3.79 8.421-8.421 8.421zm0-15.263c-3.763 0-6.842 3.08-6.842 6.842 0 3.764 3.079 6.842 6.842 6.842 3.763 0 6.842-3.078 6.842-6.842 0-3.763-3.079-6.842-6.842-6.842z"></path></g></svg>
       <p className="textadd">Add Reminder</p>
      </div>     
      </div>
    );
  }
}

export default AddReminder;
