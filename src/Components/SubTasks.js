import React, { Component } from "react";
import AddReminder from './AddReminder';
import ShareTask from './ShareTask';
import TaskName from './TaskName';
import SubTaskTable from './SubTaskTable';
import axios from 'axios';

import "./SubTasks.css";

let itemId;
class SubTasks extends Component {
  constructor(props){
    super(props);
    this.state = {
      result:"",
      item:"",
      subTasks:"",
      items:"",
      tasks:[],
      show:false
    };
  }

  async componentDidMount() {
    const response = await fetch('/AnydoList');
     const json = await response.json();
     this.setState({ result: json });
     const responseOfItems = await fetch('/AnydoItem');
     const jsonOfItems = await responseOfItems.json();
     this.setState({item : jsonOfItems});
     const responseOfSubTasks = await fetch('/AnydoSubTask');
     const jsonOfSubTasks = await responseOfSubTasks.json();
     this.setState({subTasks : jsonOfSubTasks});
     let result = this.state.result;
     let item = this.state.item;
     for(let i=0;i<result.length;i++){
       var DeadLines = { Today: [], Tomorrow: [], Someday: []};
       var newItem = {
           list: result[i].listName,
           DeadLines: DeadLines,
           key: result[i].listId
         };
         for(let j=0;j<item.length;j++){
           if(result[i].listId === item[j].listId){
               newItem.DeadLines[item[j].dayName].push(item[j].itemName);
           }
         }
       this.setState((prevState) => {
         return {
           items: prevState.items.concat(newItem)
         };
       });
     }
     let subTasks = this.state.subTasks;
     for(let k=0;k<subTasks.length;k++){
      var newSubTask = {
        name: subTasks[k].subTaskName,
        key: subTasks[k].SubTaskId,
        itemId:subTasks[k].itemId
      };
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.concat(newSubTask)
      };
    });
    let item = this.state.item;
      for(let i=0;i<item.length;i++){
        if(item[i].itemName == this.props.itemName){
            itemId = item[i].itemId;
        }
      }
     }
     this.setState({show:true});
     console.log(this.state.tasks);
   }
    
   addSubTask =(subTask) => {
     console.log(this.state.subTasks);
    var data;
    if(subTask!== ""){
  
      data = {
        "subTaskName":subTask,
        "itemId":itemId
      };
   }

  console.log(this.state.tasks);
 let dataToSend = JSON.stringify(data);
 console.log(dataToSend);
 const URL = `http://localhost:8080/AnydoSubTask`;
 
    axios(URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    data: dataToSend,
  })
  .then(subTaskResponse => {
    console.log(subTaskResponse);
    console.log(subTaskResponse.data.itemId);
    var newSubTask = {
      name: subTaskResponse.data.subTaskName,
      itemId: subTaskResponse.data.itemId,
      key: subTaskResponse.data.subTaskId
    };
console.log(newSubTask);
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.concat(newSubTask)
      };
    });
    console.log(this.state.tasks);
   })

   .catch(error => {
     throw error;
   }); 
}

  render() {
    let subTaskTable = null;
    if(this.state.show){
      
      let item = this.state.item;
      for(let i=0;i<item.length;i++){
        if(item[i].itemName == this.props.itemName){
            itemId = item[i].itemId;
        }
      }
      console.log(this.state.tasks);
      console.log(itemId);
      console.log(this.props.itemName);
      console.log(itemId);
      subTaskTable =(
        <div>
         <SubTaskTable addSubTask={this.addSubTask} subTaskEntries={this.state.tasks} itemId = {itemId}/>
        </div>
      );
    }

   
    return (
      <div className="SubTasks">
      <div className="SubTaskSpace">           
      <strong>Sub-Tasks</strong>
      </div>
          <div className="SubTaskCard">
          <div className="ItemName">{this.props.itemName}</div>
          <AddReminder/>
          <ShareTask/>
          <TaskName listName={this.props.listName}/>
          {subTaskTable}
         </div>       
      </div>
    );
  }
}

export default SubTasks;
