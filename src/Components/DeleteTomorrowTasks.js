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
        return <div className="TomorrowDeleteTaskName" key={item} ><div className="deleteTomorrow"><svg onClick={() => this.delete(item)} width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd">
        <path d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M17.09 7.974a.67.67 0 0 0-.678.662v10.468c0 .269-.223.487-.497.487H7.757a.494.494 0 0 1-.499-.487V8.636a.67.67 0 0 0-.677-.662.67.67 0 0 0-.678.662v10.468c0 1 .832 1.812 1.854 1.812h8.157c1.022 0 1.853-.813 1.853-1.812V8.636a.67.67 0 0 0-.677-.662zM18.291 6.324a.67.67 0 0 1 .677.662.67.67 0 0 1-.677.663H5.677A.67.67 0 0 1 5 6.986a.67.67 0 0 1 .677-.662H7.76v-.558C7.76 4.792 8.57 4 9.566 4h4.836c.996 0 1.807.792 1.807 1.766v.558h2.082zm-3.487 0v-.558a.447.447 0 0 0-.452-.441H9.516a.447.447 0 0 0-.451.441v.558h5.739z"> 
        </path></g></svg></div><p className="deleteTodayp">{item}</p>  </div>
    }

    delete(key) {
        this.props.delete(key);
      }
    

      render() {
        let showDeleteHideClassName="";
       if (this.props.show) {
         var taskEntries = this.props.tasks;
         console.log(taskEntries);
         var taskItems = taskEntries.map(this.deleteTomorrowTask);
         showDeleteHideClassName = <div >
         {taskItems}
        </div>;
       } 
       return (
         <div className="TomorrowDeleteTaskList">{showDeleteHideClassName}</div>
       );
     }
}


export default DeleteTomorrowTasks;

