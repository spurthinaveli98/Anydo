import React,{Component} from 'react';
import "./TodayTasks.css";

class TodayTasks extends Component {
    constructor(props){
        super(props);
      
        this.displayTasks = this.displayTasks.bind(this);
      }

    displayTasks(item) {
        console.log(item);
        return <div onClick={() => this.setSubTaskValues(item,"Today")} className="TodayTaskName" key={item}>{item}</div>
    }

    setSubTaskValues(item,day){
       this.props.setSubTaskValues(item,day);
    }

  render() {
     let showHideClassName;
    if (this.props.show) {
      showHideClassName = "TodayTaskList";
    } else {
      showHideClassName = "";

      var taskEntries = this.props.tasks;
      var taskItems = taskEntries.map(this.displayTasks);
    }
    return (
      <div className={showHideClassName} >
       {taskItems}
      </div>
    );
  }
}


export default TodayTasks;

