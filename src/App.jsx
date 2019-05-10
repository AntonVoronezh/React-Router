import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Toolbar from './components/Toolbar';
import Content from './components/Content';
import Sidenav from './components/Sidenav';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Book from './pages/Book';
import Login from './pages/Login';
import Logout from './pages/Logout';
import NotFound from './pages/NotFound';

import data from '../data/books';

class App extends Component {
	state = { user: null };

	login = user => {
		this.setState({ user });
	};

	logout = () => {
		this.setState({ user: null });
	};

	render() {
		return (
			<BrowserRouter>
				<div className="app">
					<Toolbar />

					<Content>
						<Route path="/books" component={Sidenav} />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/login" render={props => <Login omLogin={this.login}/>} />
							<Route path="/logout" render={props => <Logout omLogout={this.logout}/>} />
							{/* <Route exact path="/books" component={Books} /> */}
							{/* <Route exact path="/books/:topic?" component={Books} /> */}
							{/* <Route path="/books/:topic/:Book" component={Book} /> */}
							<PrivateRoute exact path="/books/:topic?" component={Books} data={data}/>
							<PrivateRoute path="/books/:topic/:Book" component={Book} data={data}/>

							<Route component={NotFound} />
						</Switch>
					</Content>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
