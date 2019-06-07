  import React, { Component } from 'react';
import './TodoList.css';
import DisplayList from './Components/DisplayList';
import DeleteList from './Components/DeleteList';
import DenseAppBar from './Components/DenseAppBar';
import Tasks from './Components/Tasks';
import ChooseList from './Components/ChooseList';
import RemindMe from './Components/RemindMe';
import NewTask from './Components/NewTask';
import { ACCESS_TOKEN } from '../constants';
import axios from 'axios';

let tasks = "All Tasks";
let currentKey="";

// var day = "Today";
class TodoList extends Component {
constructor(props) {
super(props);

this.state = {
  show: true,
  showpic: true,
  showMenu: true,
  showNewList: false,
  showSubTasks: false,
  showToday:false,
  showTomorrow:false,
  showSomeday:false,
  showDeleteList:false,
  daySelectedStatus: "",
  listSelectedStatus: "",
  updateListId: "",
  newItems:[],
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

  var token = localStorage.getItem(ACCESS_TOKEN);
  var request = new Request("/AnydoList/"+token , {
	headers: new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization':'Bearer '+token,
  })
});
  const response = await fetch(request); 
  const json1 = await response.json();
  this.setState({ result:json1 });
  console.log(this.state.result);

  const responseOfItems = new Request('/AnydoItem', {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '+token
    })
  });
  const jsonOfItems = await fetch(responseOfItems);
  const json2 = await jsonOfItems.json();
  this.setState({item : json2});
  console.log(this.state.item);

  const responseOfSubTasks = new Request('/AnydoSubTask',{
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '+token
    })
  });
  const jsonOfSubTasks = await fetch(responseOfSubTasks);
  const json3 = await jsonOfSubTasks.json();
  this.setState({subTasks : json3});
  console.log(this.state.subTasks);

  let result = this.state.result;
  let item = this.state.item;
  for(let i=0;i<result.length;i++){
    var DeadLines = { Today: [], Tomorrow: [], Someday: []};
    var newItem = {
        list: result[i].listName,
        DeadLines: DeadLines,
        key: result[i].listId
      };
      for(let j=0;j<item.length;j++){
        if(result[i].listId === item[j].listId){
            newItem.DeadLines[item[j].dayName].push(item[j].itemName);
        }
      }
    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });
  }
}
 

addItem(e){
  var token = localStorage.getItem(ACCESS_TOKEN);
var data;
     if(this._inputElement.value !== ""){
       var DeadLines= { Today: [], Tomorrow: [], Someday: []};

       data = {
         "listName":this._inputElement.value,
         "token": token
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
  
    axios(URL, {
     method: 'POST',
     headers: {
       'content-type': 'application/json',
       'Authorization': 'Bearer '+token
     },
     data: dataToSend,
   })
     .then(listResponse => {
      var DeadLines= { Today: [], Tomorrow: [], Someday: []};
      var newList = {
        list: listResponse.data.listName,
        DeadLines: DeadLines,
        key: listResponse.data.listId
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newList)
        };
      });
      console.log(this.state.items);
     })

     .catch(error => {
       throw error;
     }); 

    
}

displayItem = (list,key) => {
console.log("clicked List");
  tasks=list;
  currentKey=key;
  this.setState({
    show: true,
    showSubTasks : false,
    showToday : false,
    showTomorrow : false,
    showSomeday : false
  });  
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
      var listId;
      for(var i=0;i<items.length;i++){
        if(items[i].list === this.state.listSelectedStatus){
          items[i].DeadLines[this.state.daySelectedStatus].push(this._inputElement2.value);
          listId = items[i].key;
        }
      }

      var data = {
        "itemName":this._inputElement2.value,
        "dayName":this.state.daySelectedStatus,
        "listId":listId
      };

      this.setState({
      items: items
      });
      this.setState({ showNewList: false });
      this.setState({daySelectedStatus: ""});
      this.setState({listSelectedStatus: ""});
      this._inputElement2.value="";

      let dataToSend = JSON.stringify(data);
      const URL = `http://localhost:8080/AnydoItem`;
      var token = localStorage.getItem(ACCESS_TOKEN);
      return axios(URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer '+token
        },
        data: dataToSend,
      })
        .then(response => response.data)
        .catch(error => {
          throw error;
        }); 
    };

    myList = () => {
    tasks="All Tasks";
    currentKey = "";
    this.setState({show: true });
    console.log("All tasks");
    };


    param1 = (pa) => {
      this.setState({listSelectedStatus: pa});
    }

    param2 = (p) => {
      this.setState({daySelectedStatus: p});
     }

     deleteList = () => {
        this.setState({showDeleteList:!this.state.showDeleteList});
     }

     delete = (key) => {
        var token = localStorage.getItem(ACCESS_TOKEN);
      const URL = "http://localhost:8080/AnydoList/"+key;
        axios(URL, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer '+token
        }
      })
        .then(response => { 
          console.log(response.data);

          // this.setState({items:""});
          console.log(this.state.items);
          let temp=[];
          let newResult=[];
          let item = this.state.item;
          newResult = response.data;
          for(let i=0;i<newResult.length;i++){
            var DeadLines = { Today: [], Tomorrow: [], Someday: []};
            var newItem = {
                list: newResult[i].listName,
                DeadLines: DeadLines,
                key: newResult[i].listId
              };
              for(let j=0;j<item.length;j++){
                if(newResult[i].listId === item[j].listId){
                    newItem.DeadLines[item[j].dayName].push(item[j].itemName);
                }
              }
              console.log(newItem); 
            this.setState((prevState) => {
              return {
                newItems: prevState.newItems.concat(newItem)
              };
            });
          }
          this.setState({items:this.state.newItems});
          this.setState({newItems:temp});
          this.setState({showDeleteList:!this.state.showDeleteList});
          
        })
        .catch(error => {
          throw error;
        });

      this.setState({showSubTasks : false});
      this.setState({showToday : false});
      this.setState({showTomorrow:false});
      this.setState({showSomeday:false});
      // this.setState({showDeleteList:!this.state.showDeleteList});
     }

     callAfterDeleteTask = (newResult) => {
       this.setState({show:!this.state.show});
       console.log("call after delete task");
      let temp=[];
       console.log(this.state.item);
       console.log(this.state.result);
       console.log(this.state.items);
       console.log(newResult);
       this.setState({item:newResult});
       let result = this.state.result;
       let item = this.state.item;
       for(let i=0;i<result.length;i++){
         var DeadLines = { Today: [], Tomorrow: [], Someday: []};
         var newItem = {
             list: result[i].listName,
             DeadLines: DeadLines,
             key: result[i].listId
           };
           for(let j=0;j<item.length;j++){
             if(result[i].listId === item[j].listId){
                 newItem.DeadLines[item[j].dayName].push(item[j].itemName);
             }
            }
         this.setState((prevState) => {
           return {
             newItems: prevState.newItems.concat(newItem)
           };
         });
       }
         this.setState({items:this.state.newItems});
        this.setState({newItems:temp});
       console.log(this.state.items);
       this.setState({show:!this.state.show});
     }

     handleListNameChange = (e) => {
    
      const data = {
        "listName":e
        }
        var token = localStorage.getItem(ACCESS_TOKEN);
        console.log("entered"+e);
        this.setState({showUpdateTable: false});
                            // this.setState({show :!this.state.show});
                          let item = this.state.items;
                            for(let i=0;i<item.length;i++){
                              if(item[i].key == currentKey){
                                item[i].list = e;
                              }
                            }
                            // this.setState({show:!this.state.show});

       let dataToSend = JSON.stringify(data);
       console.log(currentKey);
       const URL = "http://localhost:8080/AnydoList/"+currentKey;
       axios(URL, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer '+token
        },
        data: dataToSend,
      })
        .then(response =>response.data)
        .catch(error => {
          throw error;
        }); 
  
     }

     handleItemNameChange = (updatedName,oldName) => {
    
      const data = {
        "itemName":updatedName
        }

        this.setState({show :!this.state.show});

        var token = localStorage.getItem(ACCESS_TOKEN);
       let dataToSend = JSON.stringify(data);
       const URL = "http://localhost:8080/AnydoItem/"+oldName;
       axios(URL, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer '+token
        },
        data: dataToSend,
      })
        .then(response =>{
          console.log(response.data);
          let item = this.state.item;
          for(let j=0;j<item.length;j++){
            if(item[j].itemId === response.data.itemId){
              item[j].itemName = response.data.itemName;
            }
          }
          let temp = [];
          this.setState({items:temp});
          let result = this.state.result;
          for(let i=0;i<result.length;i++){
            var DeadLines = { Today: [], Tomorrow: [], Someday: []};
            var newItem = {
                list: result[i].listName,
                DeadLines: DeadLines,
                key: result[i].listId
              };
              for(let j=0;j<item.length;j++){
                if(result[i].listId === item[j].listId){
                    newItem.DeadLines[item[j].dayName].push(item[j].itemName);
                }
              }
            this.setState((prevState) => {
              return {
                items: prevState.items.concat(newItem)
              };
            });
          }
          
          this.setState({show:!this.state.show});
          console.log(this.state.items);
        })
        .catch(error => {
          throw error;
        }); 
  
     }

     logout(){
      this.props.logout();
     }


  render() {


    let menu = null;
    let content = null;
    let listTable = null;

    if(this.state.showDeleteList){
      listTable = (
        <DeleteList entries={this.state.items}
          delete={this.delete}
        />
      );
    }
    else{
      listTable = (
      <DisplayList entries={this.state.items}
      display={this.displayItem}/>
      );
    }
          menu = (
            <div className="content">

            {/* <h3 className="h3"> <strong className="strong" onClick={this.myList.bind(this)}>MY LISTS </strong>&#x270D;</h3> */}
            <div className="title">
      <svg className= "circle" width="24" height="24" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10.6" stroke-width="1.2" stroke="currentColor" fill="none"></circle>
        <g fill="currentColor" fill-rule="evenodd">
        <path d="M9.629 15.437L7.147 12.56a.661.661 0 0 0-.914-.076.617.617 0 0 0-.081.888l2.923 3.386c.116.134.277.21.444.223a.654.654 0 0 0 .648-.206l6.683-7.741a.617.617 0 0 0-.083-.886.658.658 0 0 0-.912.075L9.63 15.437z"></path>
        </g>
      </svg>
    <h3 className="h3" onClick={this.myList.bind(this)}>MY LISTS</h3> 
    <svg onClick={this.deleteList.bind(this)} className="pen" width="24" height="24" viewBox="0 0 24 24">
    <g stroke="none" stroke-width="1"  transform="translate(-239.000000, -202.000000)">
    <g transform="translate(239.000000, 202.000000)">
    <path d="M8.32434121,13.517767 L19.8517292,13.517767 L19.8517292,10.517767 L8.46647684,10.517767 L5.39540903,12.0533009 L8.32434121,13.517767 Z M20.8517292,14.517767 L8.15934105,14.517767 L8.15934105,14.5533009 L3.15934105,12.0533009 L8.15934105,9.55330086 L8.15934105,9.51776695 L20.8517292,9.51776695 L20.8517292,14.517767 Z" fill="gray" transform="translate(12.005535, 12.035534) rotate(-41.000000) translate(-12.005535, -12.035534)"></path>
    </g>
    </g>
    </svg> 
      </div>
             {listTable}
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
            listName={tasks}
            currentKey={currentKey}
            items={this.state.items}
            showSubTasks={this.state.showSubTasks}
            showToday={this.state.showToday}
            showTomorrow={this.state.showTomorrow}
            showSomeday={this.state.showSomeday}
            setSubTaskValues={this.setSubTaskValues}
            valuesAfterDeletionOfTask = {this.callAfterDeleteTask}
            handleListNameChange = {this.handleListNameChange}
            handleItemNameChange = {this.handleItemNameChange}
            />
          </div>
         }

        

    return (
      <div className="TodoList">
        <div className="top">
        <DenseAppBar click={() =>this.toggleMenuHandler()} showListHandler={this.showListHandler.bind(this)} logout={this.logout.bind(this)}/>
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
        {/* <button onClick = {this.props.auth.logout}>Logout</button> */}
         </div>
        </div>
      </div>
    );
  }
}

export default TodoList;