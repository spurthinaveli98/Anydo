import React, {Component} from "react";

export default class Main extends Component {

      
    render(){
       
        return(
            <div>
            <hr/>
            please login first
            <hr/>
            <button onClick={this.props.login} >login</button>
            </div>

        )
    }
}  