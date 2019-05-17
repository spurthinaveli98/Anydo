import React,{Component} from 'react';
import "./NewTask.css";

class NewTask extends Component {

  render() {
     let showHideClassName;
    if (this.props.showNewList) {
      showHideClassName = "modal display-block";
    } else {
      showHideClassName = "modal display-none";
    }
    return (
      <div className={showHideClassName} >
           <button className="close" onClick={this.props.closeAddTask}>X</button> 
        {/* need to add cross button to close the webpage */}
        <section className="modal-main">
        <div>
        <div >
        {this.props.children[0]}
        </div>
        <div className="modal-sidebar">
          <p>Remind me:</p>
        <div>{this.props.children[1]}</div>
        <p>List:</p>
        <div>{this.props.children[2]}</div>
        </div>
        </div>
      
          <div className="modal-footer" onClick={this.props.handleAddTask}>
            <button className="AddTask" >
              <strong>Add Task</strong>
            </button>
          </div>
          
          </section>
      </div>
    );
  }
}


export default NewTask;

