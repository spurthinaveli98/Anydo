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
                {/* <img id="subTask" onClick={() => this.deleteSubTask(entry.name)} className="delSubTask" src={delSubTask} alt="delete"></img>  */}
                <svg className="delSubTask" onClick={() => this.deleteSubTask(entry.name)} width="20" height="20" viewBox="0 0 20 20"><title>Delete</title><g fill="none" fill-rule="evenodd"><path d="M2 2h16v16H2z"></path><path d="M11.062 10l3.75-3.85c.287-.295.24-.735-.104-.984-.347-.251-.856-.212-1.143.082L10 8.91 6.435 5.25c-.287-.295-.796-.334-1.143-.083-.344.249-.39.69-.104.984L8.938 10l-3.75 3.85c-.287.295-.24.735.104.984.347.251.856.212 1.143-.082L10 11.09l3.565 3.66c.287.295.796.334 1.143.083.344-.249.39-.69.104-.984L11.062 10zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" fill="currentColor"></path></g></svg>
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
