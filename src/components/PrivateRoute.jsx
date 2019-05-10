import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ user, component: component, data, ...rest }) => {
	return (
		<Route {...rest} render={props => (user ? <Component data={data} {...props} /> : <Redirect to="/login" />)} />
	);
};
