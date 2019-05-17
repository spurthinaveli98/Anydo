import React, { Component } from 'react';
import './TodoList.css';
import DisplayList from './Components/DisplayList';
import DenseAppBar from './Components/DenseAppBar';
import Tasks from './Components/Tasks';
import ChooseList from './Components/ChooseList';
import RemindMe from './Components/RemindMe';
import NewTask from './Components/NewTask';
import axios from 'axios';

var tasks = "All Tasks";
var currentKey="";
// var day = "Today";
class TodoList extends Component {
constructor(props) {
super(props);

this.state = {
  show: true,
  showpic: true,
  showMenu: true,
  showNewList: false,
  daySelectedStatus: "",
  listSelectedStatus: "",
 items:[]
};

this.style = {
  padding: "10px",
  width: "160px",
  border: "2px solid #eff0f2",
  margin: "10px"
}

this.addItem=this.addItem.bind(this);
this.displayItem=this.displayItem.bind(this);
}

async componentDidMount() {
  const response = await fetch('/AnydoList');
  const json = await response.json();
  this.setState({ result: json });
  var DeadLines= { Today: [], Tomorrow: [], Someday: []};
  let result = this.state.result;
  for(let i=0;i<result.length;i++){
    var newItem = {
      list: result[i].listName,
      DeadLines: DeadLines,
      key: result[i].listId
    };
    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });
  }
}

addItem(e){
var data;
     if(this._inputElement.value !== ""){
       var DeadLines= { Today: [], Tomorrow: [], Someday: []};

       data = {
         "listName":this._inputElement.value
       };

      // var newItem = {
      //   list: this._inputElement.value,
      //   DeadLines: DeadLines,
      //   key: Date.now()
      // };

      // this.setState((prevState) => {
      //   return {
      //     items: prevState.items.concat(newItem)
      //   };
      // });
    }

    this._inputElement.value = "";
    e.preventDefault();

  let dataToSend = JSON.stringify(data);
  const URL = `http://localhost:8080/AnydoList`;
  
  return axios(URL, {
     method: 'POST',
     headers: {
       'content-type': 'application/json',
     },
     data: dataToSend,
   })
     .then(response => response.data)
     .catch(error => {
       throw error;
     }); 
}

displayItem(list,key){
  tasks=list;
  currentKey=key;
  console.log("t"+tasks+currentKey);
  this.setState({show: true });
}

toggleMenuHandler = () => {
  const doesShow = this.state.showMenu;
  this.setState({showMenu: !doesShow});
}

showListHandler = () => {
    this.setState({ showNewList: true });
  };

closeTaskHandler = () => {
  this.setState({ showNewList: false });
  this.setState({daySelectedStatus: ""});
  this.setState({listSelectedStatus: ""});
  this._inputElement2.value="";
}

AddTaskHandler = () => {
      var items = this.state.items.slice();
      for(var i=0;i<items.length;i++){
        if(items[i].list === this.state.listSelectedStatus){
          items[i].DeadLines[this.state.daySelectedStatus].push(this._inputElement2.value);
        }
      }

      this.setState({
      items: items
      });
      this.setState({ showNewList: false });
      this.setState({daySelectedStatus: ""});
      this.setState({listSelectedStatus: ""});
      this._inputElement2.value="";
    };

    myList = () => {
    tasks="All Tasks";
    this.setState({show: true });
    console.log("All tasks");
    };


    param1 = (pa) => {
      this.setState({listSelectedStatus: pa});
    }

    param2 = (p) => {
      this.setState({daySelectedStatus: p});
     }


  render() {

    let menu = null;
    let content = null;
          menu = (
            <div className="content">

            <h3 className="h3"> <strong className="strong" onClick={this.myList.bind(this)}>MY LISTS </strong>&#x270D;</h3>
             <DisplayList entries={this.state.items}
                           display={this.displayItem}/>
                <form onSubmit={this.addItem}>
                  <input style={this.style} ref={(a) => this._inputElement =a}
                  placeholder="+ New List">
                  </input>
                </form>
             </div>);

         if(this.state.show){
           content = 
           <div>
            <Tasks 
            taskName={tasks}
            currentKey={currentKey}
            items={this.state.items}
            />
          </div>
           
         }

    return (
      <div className="TodoList">
        <div className="top">
        <DenseAppBar click={() =>this.toggleMenuHandler()} showListHandler={this.showListHandler.bind(this)}/>
        </div>
        <div className="row">
          <div className={this.state.showMenu?'left show-menu':'left hide-menu'}>
          <div className="header">
          {menu}
          </div>
          </div>
          <div className={this.state.showMenu?'right show-hmenu':'right show-fmenu'}>
     
          <NewTask showNewList={this.state.showNewList} handleAddTask={this.AddTaskHandler.bind(this)} closeAddTask={this.closeTaskHandler.bind(this)}>
          <input className="InputTask" placeholder="I want to.." ref={(b) => this._inputElement2 =b}/>
          <RemindMe param2={this.param2} status={this.state.daySelectedStatus}/>
          <ChooseList entries={this.state.items} param1={this.param1} status={this.state.listSelectedStatus}/>
        </NewTask>
        {content} 
         </div>
        </div>
      </div>
    );
  }
}

export default TodoList;

