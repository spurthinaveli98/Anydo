import React,{Component} from 'react';
import "./TodayTasks.css";

class TodayTasks extends Component {
    constructor(props){
        super(props);
      
        this.displayTasks = this.displayTasks.bind(this);
      }

    displayTasks(item) {
        console.log(item);
        return <div onClick={() => this.setSubTaskValues(item,"Today")} className="TodayTaskName" key={item}><p className="Todayp">{item}</p>  </div>
    }

    setSubTaskValues(item,day){
       this.props.setSubTaskValues(item,day);
    }

  render() {
     let showHideClassName="";
    if (this.props.show) {
      var taskEntries = this.props.tasks;
      var taskItems = taskEntries.map(this.displayTasks);
      showHideClassName = <div  className="TodayTaskList" >
      {taskItems}
     </div>;
    } 
    return (
      <div>{showHideClassName}</div>
    );
  }
}


export default TodayTasks;

