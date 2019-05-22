import React,{Component} from 'react';
import "./TodayTasks.css";

class TodayTasks extends Component {
    constructor(props){
        super(props);
      
        this.displayTasks = this.displayTasks.bind(this);
      }

    displayTasks(item) {
        console.log(item);
        return <li onClick={() => this.setSubTaskValues(item)} className="li" key={item}>{item}</li>
    }

    setSubTaskValues(item){
       this.props.setSubTaskValues(item);
    }

  render() {
     let showHideClassName;
    if (this.props.show) {
      showHideClassName = "thelist";
    } else {
      showHideClassName = "";

      var taskEntries = this.props.tasks;
      var taskItems = taskEntries.map(this.displayTasks);
    }
    return (
      <ui className={showHideClassName} >
       {taskItems}
      </ui>
    );
  }
}


export default TodayTasks;

