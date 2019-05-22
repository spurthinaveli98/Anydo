import React from 'react';
import "./ChooseList.css";

const ChooseList =function(props){


    const createTasks=function(item){
      var listName = item.list;
        return <div onClick={props.param1.bind(this,item.list)}
        key={item.key}  className={props.status === listName ? 'Task2Press': 'Task2' }>{item.list}</div>
      }

      var todoEntries = props.entries;
    var listItems = todoEntries.map(createTasks);

    return(
         <div className="Card2">
      {listItems}
      </div>
    );
}

export default ChooseList;