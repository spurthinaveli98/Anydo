import React from 'react';
import "./ChooseList.css";

const ChooseListTest = (props) => {

    let items = []; 
    const createItems=function(){
       
      var todoEntries = props.entries;
    // var listItems = todoEntries.map(createSelectItems);

    createSelectItems = (item) => {

             items.push(<option onClick={props.param1.bind(this,item.list)} key={item.key} value={item.list}>{item.list}</option>);   
             //here I will be creating my options dynamically based on
             //what props are currently passed to the parent component
        return items;
    }

    onDropdownSelected= (e) => {
        console.log("THE VAL", e.target.value);
        //here you will see the current selected value of the select input
    }
}

    return(
        <Input type="select" onChange={this.onDropdownSelected} label="Multiple Select" multiple>
        {this.createItems()}
   </Input>
     
    );
}

export default ChooseListTest;

// import React from 'react';
// import "./ChooseList.css";

// const ChooseList =function(props){


//     const createTasks=function(item){
//       var listName = item.list;  
//         return <li onClick={props.param1.bind(this,item.list)}
//         key={item.key}  className={props.status === {listName} ? 'liSelected': 'li' }>{item.list}</li>
//       }

//       var todoEntries = props.entries;
//     var listItems = todoEntries.map(createTasks);

//     return(
//          <ul className="theList">
//       {listItems}
//       </ul>
//     );
// }

// export default ChooseList;