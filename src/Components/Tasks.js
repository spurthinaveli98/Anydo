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
     showSubTasks: false,
     showTodayTasks:this.props.showToday,
     showTomorrowTasks:this.props.showTomorrow,
     showSomedayTasks:this.props.showSomeday,
     taskName:"",
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
  }

  setSubTaskValues=(item)=>{
    this.setState({taskName:item});
    this.setState({showSubTasks:true});
  }

  render() {
    
    let content = null;

    if(this.state.showSubTasks){
       content = (
      <div>
         <SubTasks itemName={this.state.taskName} listName={this.props.listName}/>
      </div>);
       
     }
   
    return (
      <div>
      <div className="Tasks">
      <div className="Space">           
      <strong>{this.props.listName}</strong>
      </div>

          <div className="Card">
            <div className="Task" onClick={this.displayToday.bind(this,"Today")}>
            Today
            </div>

            <TodayTasks tasks={this.state.Todaytasks} show={this.state.showTodayTasks} setSubTaskValues={this.setSubTaskValues}/>
            
            <div className="Task" onClick={this.displayTomorrow.bind(this,"Tomorrow")}>
            Tomorrow
            </div>

            <TomorrowTasks tasks={this.state.Tomorrowtasks} show={this.state.showTomorrowTasks} setSubTaskValues={this.setSubTaskValues}/>

            <div className="Task" onClick={this.displaySomeday.bind(this,"Someday")}>
            Someday
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
