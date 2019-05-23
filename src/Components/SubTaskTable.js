import React, { Component } from "react";
import "./SubTaskTable.css";
import DisplaySubTask from './DisplaySubTask';

class SubTaskTable extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
    this.style = {
        padding: "10px",
        width: "310px",
        border: "2px solid #eff0f2",
        margin: "10px"
      }
  }

//   componentWillReceiveProps(nextProps){
//     this.setState({tasks : });
//   }

  addSubTask = (value) => {
    this.props.addSubTask(value);
 }

 onKeyPress = event => {
     console.log(event.target.value);
    if (event.key == 'Enter') {
       this.addSubTask(event.target.value);
       event.target.value="";
 }
}

  render() {

    let ListOfSubTasks = null;

        console.log(this.props.subTaskEntries);
        console.log(this.props.itemId);
    
      ListOfSubTasks = 
      <div>
       <DisplaySubTask subTaskEntries={this.props.subTaskEntries} itemId = {this.props.itemId}/>
     </div>
    
   
    return (
      <div className="SubTaskTable">
          <div className="SubTaskTableCard">
                {ListOfSubTasks}
                <input type="text" style={this.style} onKeyUp={event=>this.onKeyPress(event)} placeholder='Add a new sub task'/> 
          </div>       
      </div>
    );
  }
}

export default SubTaskTable;
