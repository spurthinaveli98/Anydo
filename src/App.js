import React, {Component} from "react";
import Main from "./Components/Main";
import TodoList from "./TodoList";
import Callback from './Components/Callback';
import NotFound from './Components/NotFound';

class App extends Component {
    login() {
        this.props.auth.login();
      }

    render(){
        let mainComponent = "";
        switch(this.props.location){
            case "":
                mainComponent = <Main login = {this.login.bind(this)}/>;
                break;
            case "anydo-zemoso":
                 mainComponent = <Callback/>
                 break;
            case "anydo":
                mainComponent = this.props.auth.isAuthenticated()? <TodoList {...this.props} /> : <NotFound/>;
                break;
            default:
                mainComponent = <Main/>;
        }

        return(
           <div>
             {mainComponent}
           </div>
            
        )
    }
}

export default App;