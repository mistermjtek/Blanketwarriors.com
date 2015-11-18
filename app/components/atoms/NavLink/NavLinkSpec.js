'use strict';
import React from 'react';
import { Router, Route } from 'react-router'
import { render, findDOMNode } from 'react-dom';
import { createRenderer } from 'react/lib/ReactTestUtils';
import createHistory from 'history/lib/createMemoryHistory'
import NavLink from './NavLink';

describe('Atom', function() {
	describe('NavLink', function() {
		var shallowRenderer;
		var node;

		beforeEach(function() {
			node = document.createElement('div');
			shallowRenderer = createRenderer();
		});

	  it('Should render an "a" tag with a correct address', function() {
	  	class NavLinkWrapper extends React.Component {
	  		render() {
	  			return (
	  				<NavLink to='/blog' path='/home' query={{the: 'query'}} hash="#hash">
	  					Home
	  				</NavLink>
	  			);
	  		}
	  	}

	  	render((
	  		<Router history={createHistory('/home')}>
	  			<Route path='/home' component={NavLinkWrapper} />
	  		</Router>
	  		), node, function() {
	  		const a = node.querySelector('a');
	  		expect(a.getAttribute('href')).to.equal('/blog?the=query#hash');
	  	});
	  });
	});
});
