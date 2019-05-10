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
							<Route exact path="/books" component={Books} />
							<Route path="/books/:topic" component={Books} />
							<Route path="/books/:topic/:Book" component={Book} />
							<Route path="/login" component={Login} />
							<Route component={NotFound} />
						</Switch>
					</Content>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
