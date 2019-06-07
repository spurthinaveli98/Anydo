import React, { Component } from "react";
import "./RemindMe.css";

const RemindMe =function(props){

    return (
          <div className="Card1">
            <div className={props.status === "Today" ? 'Task1Press': 'Task1' } onClick={props.param2.bind(this,"Today")}>
            Today  
            </div>
            <div className={props.status === "Tomorrow" ? 'Task1Press': 'Task1' } onClick={props.param2.bind(this,"Tomorrow")}>
            Tomorrow
            </div>
            <div className={props.status === "Someday" ? 'Task1Press': 'Task1' } onClick={props.param2.bind(this,"Someday")}>
            Someday
            </div>
          </div>
    );
  }

export default RemindMe;
