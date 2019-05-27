import React, { Component } from "react";
import "./DisplaySubTask.css";
import delSubTask from "../images/deleteSubTask.gif";

class DisplaySubTask extends Component {
    constructor(props){
      super(props);
      this.state = {
      };
      
    }


    // const createSubTasks=function(item){
    //   if(item.itemId === this.props.itemId){
    //     return <div key={item.key} className = 'SubTask'>{item.name}</div>
    //   }
    // }

    //   var subTaskEntries = this.props.subTaskEntries;
    //   var subTaskList = subTaskEntries.map(createSubTasks);
    deleteSubTask=(name)=>{
     this.props.delete(name);
      console.log("deleted");
    }

    handleSubTaskNameChange = (event,oldName) => {
      console.log(event.target.innerHTML);
     if (event.key == 'Enter') {
        event.preventDefault();
        event.target.blur();
        this.props.handleSubTaskNameChange(event.target.innerHTML,oldName);
        console.log(event.target.innerHTML);
    
    }
    }
  
/* <p contentEditable = {true} className="editableList" type="text"
        onKeyDown={event=>this.handleListNameChange(event)}>{this.props.listName} </p> */

    render() {

        var id = this.props.itemId;
       var commentNodes = this.props.subTaskEntries.map((entry) => {
            if(entry.itemId == id){
            return (
            <div key={entry.name}>
               <div className= "theSubTaskName">
                <img id="subTask" onClick={() => this.deleteSubTask(entry.name)} className="delSubTask" src={delSubTask} alt="delete"></img> 
                <p  contentEditable = {true}
                onKeyDown={event=>this.handleSubTaskNameChange(event,entry.name)}>{entry.name}</p></div>
            </div>
            );
            }
          });
        
         
        return (
              <div className = "theSubTaskList">
                    {/* {ListOfSubTasks} */}
                    {commentNodes}
              </div>       
        );
      }
}

export default DisplaySubTask;


        // let ListOfSubTasks = null;
    
        //     console.log(this.props.subTaskEntries);
        //     console.log(this.props.itemId);
        
        //   ListOfSubTasks = 
        //   <div>
        //   <p>{this.props.subTaskEntries}</p>
        //  </div>
