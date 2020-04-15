import React from 'react';
import './App.css';
import Portal from './components/auth/Portal';
import { Route } from 'react-router-dom';
import API from "./API.js";
import HomepageLayout from "./components/HomepageLayout";

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      username: null
    }
  }

  componentDidMount() {
     if (localStorage.token) {
      API.validate(localStorage.token)
         .then(json => this.signIn(json.username, json.token))
    }
  }

  signIn = (username, token) => {
     this.setState({
      username
    })
     localStorage.token = token
  }

   signOut = () => {
    this.setState({
      username: null
    })
    localStorage.removeItem("token")
  }
 
  render(){

    return (
      <div className="App">
        {this.state.username ? <HomepageLayout/> : <Portal username={this.state.username} signOut={this.signOut} signIn={this.signIn} /> }
     </div>
    );
  }

}
export default App;



// <App>
//   {
//     loggedInCondition
//     ? <Dashboard />
//     : <AuthPortal >
//       {
//         loginFormCondition
//         ? <Login />
//         : <Signup />
//       }
//     </AuthPortal>
//   }
// </App>


// class AuthPortal extends React.Component {

//   state = {
//     login: true,
//   }

//   showLoginForm = (bool) => {
//     this.setState({ login: bool })
//   }

//   render() {
//     return {
//       this.state.login
//       ? <Login />
//         : <Signup />
//     }
//   }

// }
