import React, { Component } from "react";
import share from "../images/share.svg";
import "./Sharetask.css";

class ShareTask extends Component {
  constructor(props){
    super(props);
    this.state = {
   
    };
  }

  render() {
   
    return (
      <div className="ShareTask">
      <div className="ShareTaskCard">
      <img src={share} alt="shareTask"></img>
       <p>Share Task</p>
      </div>     
      </div>
    );
  }
}

export default ShareTask;
