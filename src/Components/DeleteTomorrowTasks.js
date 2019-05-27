import React,{Component} from 'react';
import "./DeleteTomorrowTasks.css";

class DeleteTomorrowTasks extends Component {
    constructor(props){
        super(props);
      
        this.deleteTomorrowTask = this.deleteTomorrowTask.bind(this);
      }

    deleteTomorrowTask(item) {
        console.log(item);
        console.log("entered function");
        return <div className="TomorrowDeleteTaskName" key={item} ><div className="deleteTomorrow"><img onClick={() => this.delete(item)} src="https://img.icons8.com/small/16/000000/delete-forever.png"></img></div><p className="deleteTodayp">{item}</p>  </div>
    }

    delete(key) {
        this.props.delete(key);
      }
    

  render() {
     let showHideClassName;
    if (this.props.show) {
      showHideClassName = "TomorrowDeleteTaskList";
    } else {
      showHideClassName = "";

      var tomorrowTaskEntries = this.props.tasks;
      var tomorrowTaskItems = tomorrowTaskEntries.map(this.deleteTomorrowTask);
    }
    return (
      <div className={showHideClassName} >
       {tomorrowTaskItems}
      </div>
    );
  }
}


export default DeleteTomorrowTasks;

