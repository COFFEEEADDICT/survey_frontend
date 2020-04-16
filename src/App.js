import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import API from './API.js';
import NewSurveyForm from './components/NewSurveyForm';
import NavBar from './components/NavBar';
import MySurveys from './components/MySurveys';
import LoginForm from './components/auth/Log_in';
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			username: null
		};
	}

	componentDidMount() {
		if (localStorage.token) {
			API.validate(localStorage.token).then((json) => this.signIn(json.username, json.token));
		}
	}

	signIn = (username, token) => {
		this.setState({
			username
		});
		localStorage.token = token;
	};

	signOut = () => {
		this.setState({
			username: null
		});
		localStorage.removeItem('token');
	};

	render() {
		return (
			<div>
				<NavBar />
				<Route exact path="/my_surveys" component={MySurveys} />
				<Route exact path="/create_survey" component={NewSurveyForm} />
				<Route exact path="/log_in" component={LoginForm} />

				{/* <Route exact path="/discover" component={HomePageCardsContainer} /> */}
				{/* <Route exact path="/restaurants/:id" component={RestaurantShow} /> */}
			</div>
		);
	}
}
export default App;

{
	/* {this.state.username ? (
	<HomepageLayout />
) : (
	<Portal username={this.state.username} signOut={this.signOut} signIn={this.signIn} />
)} */
}
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
