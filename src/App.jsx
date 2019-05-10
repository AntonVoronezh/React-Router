import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Toolbar from './components/Toolbar';
import Content from './components/Content';
import Sidenav from './components/Sidenav';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Book from './pages/Book';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

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
							<Route exact path="/books/:topic?" component={Books} />
							<Route path="/books/:topic/:Book" component={Book} />

							<Route component={NotFound} />
						</Switch>
					</Content>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
