import React, { Component } from "react";
import TodayTasks from './TodayTasks';
import TomorrowTasks from './TomorrowTasks';
import SomedayTasks from './SomedayTasks';
import SubTasks from './SubTasks';
import "./Tasks.css";

class Tasks extends Component {
  constructor(props){
    super(props);

    this.state = {
     Todaytasks:[],
     Tomorrowtasks:[],
     Somedaytasks:[],
     showSubTasks: this.props.showSubTasks,
     showTodayTasks:this.props.showToday,
     showTomorrowTasks:this.props.showTomorrow,
     showSomedayTasks:this.props.showSomeday,
     taskName:"",
     day: "Today",
    };
  }
 
  displayToday(name){
    var match = "false";
    let items=this.props.items;
    this.setState({showTodayTasks:!this.state.showTodayTasks});
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
      if(items[j].DeadLines[name]!="")
      task.push(items[j].DeadLines[name]);
    }
    this.setState({Todaytasks:task});
  }
  this.setState({day:"Today"});
  console.log(this.state.showSubTasks);
  }

  displayTomorrow(name){
    var match = "false";
    let items=this.props.items;
    this.setState({showTomorrowTasks:!this.state.showTomorrowTasks});
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
      if(items[j].DeadLines[name]!="")
      task.push(items[j].DeadLines[name]);
    }
    this.setState({Tomorrowtasks:task});
  }
  this.setState({day:"Tomorrow"});
  }

  displaySomeday(name){
    var match = "false";
    let items=this.props.items;
    this.setState({showSomedayTasks:!this.state.showSomedayTasks});
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
      if(items[j].DeadLines[name]!="")
      task.push(items[j].DeadLines[name]);
    }
    this.setState({Somedaytasks:task});
  }
  this.setState({day:"Someday"});
  }

  setSubTaskValues=(item, day)=>{
    this.setState({taskName:item});
    this.setState({showSubTasks:true});
    this.setState({day:day});
    
  }

  render() {
    
    let content = null;

    if(this.state.showSubTasks){
      let items=[];
    let tasks = [];
    items = this.props.items;
    for(let i=0;i<items.length;i++){
      if(items[i].key === this.props.currentKey){
       tasks =items[i].DeadLines[this.state.day];
      }
    }
    for(let j=0;j<tasks.length;j++){
      if(tasks[j] == this.state.taskName){
      content = (
        <div>
           <SubTasks itemName={this.state.taskName} listName={this.props.listName} listId={this.props.currentKey}/>
        </div>);
      }
    }     
 }
   
    return (
      <div>
      <div className="Tasks">
      <div className="Space">           
      <h3>{this.props.listName}</h3>
      </div>

          <div className="Card">
            <div className="Task" onClick={this.displayToday.bind(this,"Today")}>
            <strong>Today</strong>
            </div>

            <TodayTasks tasks={this.state.Todaytasks} show={this.state.showTodayTasks} setSubTaskValues={this.setSubTaskValues}/>
            
            <div className="Task" onClick={this.displayTomorrow.bind(this,"Tomorrow")}>
            <strong>Tomorrow</strong>
            </div>

            <TomorrowTasks tasks={this.state.Tomorrowtasks} show={this.state.showTomorrowTasks} setSubTaskValues={this.setSubTaskValues}/>

            <div className="Task" onClick={this.displaySomeday.bind(this,"Someday")}>
            <strong>Someday</strong>
            </div>
          
            <SomedayTasks tasks={this.state.Somedaytasks} show={this.state.showSomedayTasks} setSubTaskValues={this.setSubTaskValues}/>
            
          </div>
       
      </div>
      {content}
      </div>
    );
  }
}

export default Tasks;
