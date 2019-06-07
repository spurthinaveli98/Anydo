import React, { Component } from "react";
import AddReminder from './AddReminder';
import ShareTask from './ShareTask';
import TaskName from './TaskName';
import SubTaskTable from './SubTaskTable';
import { ACCESS_TOKEN } from '../../constants';
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
      newSubTask:[],
      tempNewSubTask:[],
      show:false,
      listname: this.props.listName
    };
  }

  async componentDidMount() {

  var token = localStorage.getItem(ACCESS_TOKEN);
  var request = new Request("/AnydoList/"+token , {
	headers: new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization':'Bearer '+token,
  })
});
  const response = await fetch(request); 
  const json1 = await response.json();
  this.setState({ result:json1 });
  console.log(this.state.result);

  const responseOfItems = new Request('/AnydoItem', {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '+token
    })
  });
  const jsonOfItems = await fetch(responseOfItems);
  const json2 = await jsonOfItems.json();
  this.setState({item : json2});
  console.log(this.state.item);

  const responseOfSubTasks = new Request('/AnydoSubTask',{
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '+token
    })
  });
  const jsonOfSubTasks = await fetch(responseOfSubTasks);
  const json3 = await jsonOfSubTasks.json();
  this.setState({subTasks : json3});
  console.log(this.state.subTasks);


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
     let tempSubTasks = this.state.subTasks;
     for(let k=0;k<tempSubTasks.length;k++){
      var tempNewSubTask = {
        name: tempSubTasks[k].subTaskName,
        key: tempSubTasks[k].subTaskId,
        itemId:tempSubTasks[k].itemId
      };
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.concat(tempNewSubTask)
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
 var token = localStorage.getItem(ACCESS_TOKEN); 

    axios(URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer '+token
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

deleteSubTasks = (name) => {
  console.log("subTask to be deleted"+name);
  var token = localStorage.getItem(ACCESS_TOKEN); 
  const URL = "http://localhost:8080/AnydoSubTask/"+name;
  axios(URL, {
  method: 'DELETE' ,
  headers: {
    'content-type': 'application/json',
    'Authorization': 'Bearer '+token
  },
 })
 .then(response => { 
   console.log(response.data);
   let temp=[];
   this.setState({newSubTask:response.data});
   console.log(this.state.newSubTask);
   let newSubTasks = this.state.newSubTask;
   console.log(newSubTasks);
   for(let k=0;k<newSubTasks.length;k++){
    var subTask = {
      name: newSubTasks[k].subTaskName,
      key: newSubTasks[k].subTaskId,
      itemId:newSubTasks[k].itemId
    };
  this.setState((prevState) => {
    return {
      tempNewSubTask: prevState.tempNewSubTask.concat(subTask)
    };
  });
   }
   console.log(this.state.tasks);
   this.setState({tasks:temp});
   console.log(this.state.tasks);
   this.setState({tasks:this.state.tempNewSubTask});    
   console.log(this.state.tasks);
   this.setState({tempNewSubTask:temp});
 });
}

handleItemNameChange = (event) => {
  console.log(event.target.innerHTML);
 if (event.key == 'Enter') {
   event.preventDefault();
   event.target.blur();
   this.props.handleItemNameChange(event.target.innerHTML);
  }
}
  
handleSubTaskNameChange = (name,oldName) => {
  console.log("entered");
  const data = {
    "subTaskName":name
    }
    var token = localStorage.getItem(ACCESS_TOKEN); 
    let dataToSend = JSON.stringify(data);
    const URL = "http://localhost:8080/AnydoSubTask/"+oldName;
    axios(URL, {
     method: 'PUT',
     headers: {
       'content-type': 'application/json',
      'Authorization': 'Bearer '+token
     },
     data: dataToSend,
   })
   .then(response =>{
    let item = this.state.subTasks;
    for(let j=0;j<item.length;j++){
      if(item[j].subTaskId === response.data.subTaskId){
        item[j].subTaskName = response.data.subTaskName;
      }
    }
    let temp=[];
    this.setState({tasks:temp});
    for(let k=0;k<item.length;k++){
      var tempNewSubTask = {
        name: item[k].subTaskName,
        key: item[k].subTaskId,
        itemId:item[k].itemId
      };
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.concat(tempNewSubTask)
      };
    });
  }
   }
    )
  .catch(error => {
    throw error;
  }); 
  console.log(this.state.tasks);
}

  render() {
    let subTaskTable = null;
    let taskNameInSubTask = null;
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
         <SubTaskTable addSubTask={this.addSubTask} subTaskEntries={this.state.tasks} itemId = {itemId} delete={this.deleteSubTasks} handleSubTaskNameChange = {this.handleSubTaskNameChange}/>
        </div>
      );
    }

    if(this.props.listName === "All Tasks")
    {
      let target = "";
      let item = this.state.item;
      let result = this.state.result;
      for(let i=0; i< item.length; i++){
        if(item[i].itemName === this.props.itemName){
             target = item[i].listId;
        }
      }
      for(let i=0; i<result.length; i++){
        if(target === result[i].listId){
          taskNameInSubTask =(<TaskName listName={result[i].listName}/>)
        }
      }
    }
    else {
      taskNameInSubTask =(
      <TaskName listName={this.props.listName}/>)
    }
   
    return (
      <div className="SubTasks">
      <div className="SubTaskSpace">           
      </div>
          <div className="SubTaskCard">
          <div className="ItemName"> <strong> <p contentEditable = {true} className="editableList" type="text"
        onKeyDown={event=>this.handleItemNameChange(event)}>{this.props.itemName} </p></strong></div>
          <AddReminder/>
          <ShareTask/>
          {taskNameInSubTask}
          {subTaskTable}
         </div>       
      </div>
    );
  }
}

export default SubTasks;
