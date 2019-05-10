import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

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

import data from './data/books';

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
			<div className="app">
				<Toolbar user={this.state.user} />

				<Content>
					<Route path="/books" component={Sidenav} />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/login" render={props => <Login onLogin={this.login} />} />
						<Route path="/logout" render={props => <Logout onLogout={this.logout} />} />
						{/* <Route exact path="/books" component={Books} /> */}
						{/* <Route exact path="/books/:topic?" component={Books} /> */}
						{/* <Route path="/books/:topic/:Book" component={Book} /> */}
						<PrivateRoute
							exact
							path="/books/:topic?"
							user={this.state.user}
							component={Books}
							data={data}
						/>
						<PrivateRoute path="/books/:topic/:Book" user={this.state.user} component={Book} data={data} />

						<Route component={NotFound} />
					</Switch>
				</Content>
			</div>
		);
	}
}

export default withRouter(App);
