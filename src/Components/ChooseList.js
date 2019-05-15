import React from 'react';
import "./ChooseList.css";

const ChooseList =function(props){


    const createTasks=function(item){
      var listName = item.list;  
        return <li onClick={props.param1.bind(this,item.list)}
        key={item.key}  className={props.status === {listName} ? 'liSelected': 'li' }>{item.list}</li>
      }

      var todoEntries = props.entries;
    var listItems = todoEntries.map(createTasks);

    return(
         <ul className="theList">
      {listItems}
      </ul>
    );
}

export default ChooseList;