import React,{Component} from 'react';
import "./DeleteSomedayTasks.css";

class DeleteSomedayTasks extends Component {
    constructor(props){
        super(props);
      
        this.deleteSomedayTask = this.deleteSomedayTask.bind(this);
      }

    deleteSomedayTask(item) {
        console.log(item);
        console.log("entered function");
        return <div className="SomedayDeleteTaskName" key={item} ><div className="deleteSomeday"><img onClick={() => this.delete(item)} src="https://img.icons8.com/small/16/000000/delete-forever.png"></img></div><p className="deleteTodayp">{item}</p>  </div>
    }

    delete(key) {
        this.props.delete(key);
      }
    

  render() {
     let showHideClassName;
    if (this.props.show) {
      showHideClassName = "SomedayDeleteTaskList";
    } else {
      showHideClassName = "";

      var SomedayTaskEntries = this.props.tasks;
      var SomedayTaskItems =SomedayTaskEntries.map(this.deleteSomedayTask);
    }
    return (
      <div className={showHideClassName} >
       {SomedayTaskItems}
      </div>
    );
  }
}


export default DeleteSomedayTasks;

