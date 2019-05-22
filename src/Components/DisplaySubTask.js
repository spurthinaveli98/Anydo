import React, { Component } from "react";
import "./DisplaySubTask.css";

class DisplaySubTask extends Component {
    constructor(props){
      super(props);
      this.state = {
      };
      
    }


    // const createSubTasks=function(item){
    //   if(item.itemId === this.props.itemId){
    //     return <div key={item.key} className = 'SubTask'>{item.name}</div>
    //   }
    // }

    //   var subTaskEntries = this.props.subTaskEntries;
    //   var subTaskList = subTaskEntries.map(createSubTasks);

    render() {

        // let ListOfSubTasks = null;
    
        //     console.log(this.props.subTaskEntries);
        //     console.log(this.props.itemId);
        
        //   ListOfSubTasks = 
        //   <div>
        //   <p>{this.props.subTaskEntries}</p>
        //  </div>

        var id = this.props.itemId;
       var commentNodes = this.props.subTaskEntries.map(function (entry){
            if(entry.itemId == id){
            return (
            <div>
                <p>{entry.name}</p>
            </div>
            );
            }
          });
        
       
        return (
              <div className = "theSubTask">
                    {/* {ListOfSubTasks} */}
                    {commentNodes}
              </div>       
        );
      }
}

export default DisplaySubTask;