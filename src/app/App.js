import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppHeader from '../common/AppHeader';
import Home from '../home/Home';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
// import Profile from '../user/profile/Profile';
import TodoList from '../user/TodoList';
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';
import PrivateRoute from '../common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';
import history from '../History.js';
import { Router as Router } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false,
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true
    });

    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        authenticated: true,
        loading: false
      });
    }).catch(error => {
      this.setState({
        loading: false
      });  
    });    
  }

  handleLogout() {
    console.log("entered");
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    history.push("/"); 
    Alert.success("You're safely logged out!");
  }



  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    let content = null;
    if(this.state.loading) {
      return <LoadingIndicator />
    }

    // if(!this.state.hide){
    //   content = (
    //      <div className="app-top-box">
          
    //     </div>
    //   )}

    return (
      <Router history = {history}>
      <div className="app">
       
        
        <div className="app-body">
          
            <Route exact path="/" component={Home}></Route>           
            {/* <PrivateRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
              component={TodoList}></PrivateRoute> */}
              <Route exact path ="/profile" render ={(props) => <TodoList onLogout = {this.handleLogout.bind(this)} />}></Route>
            <Route exact path="/login"
              render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
            <Route exact path="/signup"
              render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}></Route>
            <Route exact path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>  
         
        </div>
        <Alert stack={{limit: 3}} 
          timeout = {3000}
          position='top-right' effect='slide' offset={65} />
      </div>
       </Router>
    );
  }
}

export default App;
