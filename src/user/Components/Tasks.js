import React, { Component } from "react";
import TodayTasks from './TodayTasks';
import TomorrowTasks from './TomorrowTasks';
import SomedayTasks from './SomedayTasks';
import SubTasks from './SubTasks';
import DeleteTodayTasks from './DeleteTodayTasks';
import DeleteTomorrowTasks from './DeleteTomorrowTasks';
import DeleteSomedayTasks from './DeleteSomedayTasks';
import { ACCESS_TOKEN } from '../../constants';
import "./Tasks.css";
import axios from 'axios';

class Tasks extends Component {
  constructor(props){
    super(props);

    this.state = {
     Todaytasks:[],
     Tomorrowtasks:[],
     Somedaytasks:[],
     showSubTasks: this.props.showSubTasks,
     showTodayTasks:"",
     showTomorrowTasks:"",
     showSomedayTasks:"",
     showDeleteTodayTask:false,
     showDeleteTomorrowTask:false,
     showDeleteSomedayTask:false,
     taskName:"",
     day: "Today",
    };
  }
 componentWillReceiveProps(newProps)
 {
   console.log("will receive");
   console.log(newProps);

   let showSubTasks=[];
  // showSubTasks=[...newProps.SubTasks]
   this.setState({
    //showSubTasks: newProps.showSubTasks,
    showTodayTasks:newProps.showToday,
    showTomorrowTasks:newProps.showTomorrow,
    showSomedayTasks:newProps.showSomeday,
  })
 }
componentDidMount(){
  console.log("after click");
  console.log(this.props);
  this.setState({
    showSubTasks: this.props.showSubTasks,
    showTodayTasks:this.props.showToday,
    showTomorrowTasks:this.props.showTomorrow,
    showSomedayTasks:this.props.showSomeday,
  })
}

  displayToday(name){
    var match = "false";
    let items=this.props.items;
    for(let i=0;i<items.length;i++)
   {
     if(items[i].key === this.props.currentKey)
     { 
       match = "true";
      this.setState({Todaytasks:items[i].DeadLines[name]});
     }
   }
   if(match == "false"){
    var task = [];
    for(let j=0;j<items.length;j++){
      if(items[j].DeadLines[name]!=""){
      let temp = [];
      temp = [...items[j].DeadLines[name]];
      for(let k = 0;k < temp.length; k++){
        task.push(temp[k]);
      }
      }
    }
    this.setState({Todaytasks:task});
  }
  this.setState({day:"Today"});
  this.setState({showTodayTasks:!this.state.showTodayTasks});
  this.setState({showDeleteTodayTask:false});
  }

  displayTomorrow(name){
    var match = "false";
    let items=this.props.items;
    for(let i=0;i<items.length;i++)
   {
     if(items[i].key === this.props.currentKey)
     { 
       match = "true";
      this.setState({Tomorrowtasks:items[i].DeadLines[name]});
     }
   }
   if(match == "false"){
    var task = [];
    for(let j=0;j<items.length;j++){
      if(items[j].DeadLines[name]!=""){
      let temp = [];
      temp = [...items[j].DeadLines[name]];
      for(let k = 0;k < temp.length; k++){
        task.push(temp[k]);
      }
      }
    }
    this.setState({Tomorrowtasks:task});
  }
  this.setState({day:"Tomorrow"});
  this.setState({showTomorrowTasks:!this.state.showTomorrowTasks});
  this.setState({showDeleteTomorrowTask:false});
  }

  displaySomeday(name){
    var match = "false";
    let items=this.props.items;
    for(let i=0;i<items.length;i++)
   {
     if(items[i].key === this.props.currentKey)
     { 
       match = "true";
      this.setState({Somedaytasks:items[i].DeadLines[name]});
     }
   }
   if(match == "false"){
    var task = [];
    for(let j=0;j<items.length;j++){
      if(items[j].DeadLines[name]!=""){
      let temp = [];
      temp = [...items[j].DeadLines[name]];
      for(let k = 0;k < temp.length; k++){
        task.push(temp[k]);
      }
      }
    }
    this.setState({Somedaytasks:task});
  }
  this.setState({day:"Someday"});
  this.setState({showSomedayTasks:!this.state.showSomedayTasks});
  this.setState({showDeleteSomedayTask:false});
  }

  setSubTaskValues = (item, day) => {
    this.setState({taskName:item});
    this.setState({showSubTasks:true});
    this.setState({day:day}); 
  }

  deleteTodayTask(name){
    var match = "false";
    let items=this.props.items;
    for(let i=0;i<items.length;i++)
   {
     if(items[i].key === this.props.currentKey)
     { 
       match = "true";
      this.setState({Todaytasks:items[i].DeadLines[name]});
     }
   }
   if(match == "false"){
    var task = [];
    for(let j=0;j<items.length;j++){
      if(items[j].DeadLines[name]!=""){
      let temp = [];
      temp = [...items[j].DeadLines[name]];
      for(let k = 0;k < temp.length; k++){
        task.push(temp[k]);
      }
      }
    }
    this.setState({Todaytasks:task});
  }
  this.setState({day:"Today"});
  this.setState({showTodayTasks:false});
    this.setState({showDeleteTodayTask:!this.state.showDeleteTodayTask
    });
 }

 deleteTomorrowTask(name){
  var match = "false";
  let items=this.props.items;
  for(let i=0;i<items.length;i++)
 {
   if(items[i].key === this.props.currentKey)
   { 
     match = "true";
    this.setState({Tomorrowtasks:items[i].DeadLines[name]});
   }
 }
 if(match == "false"){
  var task = [];
  for(let j=0;j<items.length;j++){
    if(items[j].DeadLines[name]!=""){
    let temp = [];
    temp = [...items[j].DeadLines[name]];
    for(let k = 0;k < temp.length; k++){
      task.push(temp[k]);
    }
    }
  }
  this.setState({Tomorrowtasks:task});
}
this.setState({day:"Tomorrow"});
this.setState({showTomorrowTasks:false});
  this.setState({showDeleteTomorrowTask:!this.state.showDeleteTomorrowTask
  });
}

deleteSomedayTask(name){
  var match = "false";
  let items=this.props.items;
  for(let i=0;i<items.length;i++)
 {
   if(items[i].key === this.props.currentKey)
   { 
     match = "true";
    this.setState({Somedaytasks:items[i].DeadLines[name]});
   }
 }
 if(match == "false"){
  var task = [];
  for(let j=0;j<items.length;j++){
    if(items[j].DeadLines[name]!=""){
    let temp = [];
    temp = [...items[j].DeadLines[name]];
    for(let k = 0;k < temp.length; k++){
      task.push(temp[k]);
    }
    }
  }
  this.setState({Somedaytasks:task});
}
this.setState({day:"Someday"});
this.setState({showSomedayTasks:false});
this.setState({showDeleteSomedayTask:!this.state.showDeleteSomedayTask});
}

 deleteTask = (item) => {
  var token = localStorage.getItem(ACCESS_TOKEN);
  const URL = "http://localhost:8080/AnydoItem/"+item;
  axios(URL, {
  method: 'DELETE' ,
  headers: {
    'Authorization': 'Bearer '+token
  }
 })
 .then(response => { 
   console.log(response.data);
   let newResult=[];
   newResult = response.data;
   this.props.valuesAfterDeletionOfTask(newResult);
 });  
 }

 handleListNameChange = (event) => {
  console.log(event.target.innerHTML);
 if (event.key == 'Enter') {
    event.preventDefault();
    event.target.blur();
    this.props.handleListNameChange(event.target.innerHTML);
    console.log(event.target.innerHTML);

}
}

handleItemNameChange = (name) => {
  console.log("tasks");
  this.props.handleItemNameChange(name, this.state.taskName);
}

// componentWillReceiveProps(newProps){
//   console.log("enteredwill recieve props")
//   console.log(newProps);
//   if(newProps!=this.props){
//     this.setState({
//       showSubTasks: newProps.showSubTasks,
//       showTodayTasks:newProps.showToday,
//       showTomorrowTasks:newProps.showTomorrow,
//       showSomedayTasks:newProps.showSomeday,
//     })
//   }
// }
  render() {
    
    console.log(this.state);

    let content = null;
    let taskTodayTable = null;
    let taskTomorrowTable = null;
    let taskSomedayTable = null;
   
    if(this.state.showDeleteTodayTask){
      taskTodayTable = (
        <DeleteTodayTasks tasks={this.state.Todaytasks} 
        show={this.state.showDeleteTodayTask}   delete={this.deleteTask}/>
      );
    } 
    
    else if(!this.state.showDeleteTodayTask ){
      taskTodayTable = (
        <TodayTasks tasks={this.state.Todaytasks}  
        show={this.state.showTodayTasks} setSubTaskValues={this.setSubTaskValues}/>
      );
    }

    if(this.state.showDeleteTomorrowTask){
      taskTomorrowTable = (
        <DeleteTomorrowTasks tasks={this.state.Tomorrowtasks} 
        show={this.state.showDeleteTomorrowTask}   delete={this.deleteTask}/>
      );
    } 
    else{
      taskTomorrowTable = (
      
        <TomorrowTasks tasks={this.state.Tomorrowtasks} 
        show={this.state.showTomorrowTasks} setSubTaskValues={this.setSubTaskValues}/>
      );
    }

    if(this.state.showDeleteSomedayTask){
      taskSomedayTable = (
        <DeleteSomedayTasks tasks={this.state.Somedaytasks} 
        show={this.state.showDeleteSomedayTask}   delete={this.deleteTask}/>
      );
    } 
    else{
      taskSomedayTable = (
      
        <SomedayTasks tasks={this.state.Somedaytasks} 
        show={this.state.showSomedayTasks} setSubTaskValues={this.setSubTaskValues}/>
      );
    }

    if(this.state.showSubTasks){
      let items=[];
    let tasks = [];
    items = this.props.items;
    for(let i=0;i<items.length;i++){
      if(items[i].key === this.props.currentKey){
       tasks =items[i].DeadLines[this.state.day];
      }
    }
      if(this.props.listName == "All Tasks")
      {
        // var task = [];
        for(let j=0;j<items.length;j++){
          if(items[j].DeadLines[this.state.day]!=""){
          let temp = [];
          temp = [...items[j].DeadLines[this.state.day]];
          for(let k = 0;k < temp.length; k++){
            tasks.push(temp[k]);
          }
          }
        }
      }
    for(let j=0;j<tasks.length;j++){
      if(tasks[j] == this.state.taskName){
      content = (
        <div>
           <SubTasks handleItemNameChange = {this.handleItemNameChange} itemName={this.state.taskName} listName={this.props.listName} 
           listId={this.props.currentKey} />
        </div>);
      }
    } 
 }
 
    return (
      <div>
      <div className="Tasks">
      <div className="Space">           
        <p contentEditable = {true} className="editableList" type="text"
        onKeyDown={event=>this.handleListNameChange(event)}>{this.props.listName} </p>
      </div>

          <div className="Card">
            <div className="Task">
            <div className="inline">
            <strong onClick={this.displayToday.bind(this,"Today")}>Today</strong>
            <svg onClick={this.deleteTodayTask.bind(this, "Today")} className="tasksTodayPen" width="24" height="24" viewBox="0 0 24 24">
            <g stroke="none" stroke-width="1"  transform="translate(-239.000000, -202.000000)">
            <g transform="translate(239.000000, 202.000000)">
            <path d="M8.32434121,13.517767 L19.8517292,13.517767 L19.8517292,10.517767 L8.46647684,10.517767 L5.39540903,12.0533009 L8.32434121,13.517767 Z M20.8517292,14.517767 L8.15934105,14.517767 L8.15934105,14.5533009 L3.15934105,12.0533009 L8.15934105,9.55330086 L8.15934105,9.51776695 L20.8517292,9.51776695 L20.8517292,14.517767 Z" fill="gray" transform="translate(12.005535, 12.035534) rotate(-41.000000) translate(-12.005535, -12.035534)"></path>
            </g>
            </g>
            </svg>
            </div>
            </div>
            {taskTodayTable}
            
            <div className="Task">
            <div className="inline">
            <strong onClick={this.displayTomorrow.bind(this,"Tomorrow")}>Tomorrow</strong>
            <svg onClick={this.deleteTomorrowTask.bind(this, "Tomorrow")} className="tasksPen" width="24" height="24" viewBox="0 0 24 24">
            <g stroke="none" stroke-width="1"  transform="translate(-239.000000, -202.000000)">
            <g transform="translate(239.000000, 202.000000)">
            <path d="M8.32434121,13.517767 L19.8517292,13.517767 L19.8517292,10.517767 L8.46647684,10.517767 L5.39540903,12.0533009 L8.32434121,13.517767 Z M20.8517292,14.517767 L8.15934105,14.517767 L8.15934105,14.5533009 L3.15934105,12.0533009 L8.15934105,9.55330086 L8.15934105,9.51776695 L20.8517292,9.51776695 L20.8517292,14.517767 Z" fill="gray" transform="translate(12.005535, 12.035534) rotate(-41.000000) translate(-12.005535, -12.035534)"></path>
            </g>
            </g>
            </svg>
            </div>
            </div>
            {taskTomorrowTable}

            <div className="Task">
            <div className="inline">
            <strong  onClick={this.displaySomeday.bind(this,"Someday")}>Someday</strong>
            <svg onClick={this.deleteSomedayTask.bind(this, "Someday")} className="tasksSomedayPen" width="24" height="24" viewBox="0 0 24 24">
            <g stroke="none" stroke-width="1"  transform="translate(-239.000000, -202.000000)">
            <g transform="translate(239.000000, 202.000000)">
            <path d="M8.32434121,13.517767 L19.8517292,13.517767 L19.8517292,10.517767 L8.46647684,10.517767 L5.39540903,12.0533009 L8.32434121,13.517767 Z M20.8517292,14.517767 L8.15934105,14.517767 L8.15934105,14.5533009 L3.15934105,12.0533009 L8.15934105,9.55330086 L8.15934105,9.51776695 L20.8517292,9.51776695 L20.8517292,14.517767 Z" fill="gray" transform="translate(12.005535, 12.035534) rotate(-41.000000) translate(-12.005535, -12.035534)"></path>
            </g>
            </g>
            </svg>
            </div>
            </div>
            {taskSomedayTable}
            {/* <SomedayTasks tasks={this.state.Somedaytasks} show={this.state.showSomedayTasks} setSubTaskValues={this.setSubTaskValues}/> */}
            
          </div>
       
      </div>
      {content}
      </div>
    );
  }
}

export default Tasks;
