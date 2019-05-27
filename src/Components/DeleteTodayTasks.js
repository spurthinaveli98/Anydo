import React,{Component} from 'react';
import "./DeleteTodayTasks.css";

class DeleteTodayTasks extends Component {
    constructor(props){
        super(props);
      
        this.deleteTodayTask = this.deleteTodayTask.bind(this);
      }

    deleteTodayTask(item) {
        console.log(item);
        console.log("entered function");
        return <div className="TodayDeleteTaskName" key={item} ><div className="deleteToday"><img onClick={() => this.delete(item)} src="https://img.icons8.com/small/16/000000/delete-forever.png"></img></div><p className="deleteTodayp">{item}</p>  </div>
    }

    delete(key) {
        this.props.delete(key);
      }
    

  render() {
     let showHideClassName;
    if (this.props.show) {
      showHideClassName = "TodayDeleteTaskList";
    } else {
      showHideClassName = "";

      var todayTaskEntries = this.props.tasks;
      console.log(todayTaskEntries);
      var todayTaskItems = todayTaskEntries.map(this.deleteTodayTask);
    }
    return (
      <div className={showHideClassName} >
       {todayTaskItems}
      </div>
    );
  }
}


export default DeleteTodayTasks;

