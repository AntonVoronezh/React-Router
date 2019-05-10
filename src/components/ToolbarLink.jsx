import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ children }, ...rest) => {
	return (
		<NavLink activeClassName="mdc-tab--active" {...rest}>
			{children}
		</NavLink>
	);
};
