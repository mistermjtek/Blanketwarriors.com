'use strict';
import React from 'react';
import { render, findDOMNode } from 'react-dom';
import { createRenderer } from 'react/lib/ReactTestUtils';
import Img from './Img';

describe('Atom', function() {
	describe('Img', function() {
		var shallowRenderer;
		var node;

		beforeEach(function() {
			node = document.createElement('div');
			shallowRenderer = createRenderer();
		});

	  it('Should render an `img` tag with appropriate props', function renderImg() {
			shallowRenderer.render(
				<Img
          src="/assets/images/phant.svg"
          alt="Phant"
          fallback="/assets/images/phant.png"
        />
       );
			const Component = shallowRenderer.getRenderOutput();
	    expect(Component.type).to.equal('img');
	    expect(Component.props.src).to.equal('/assets/images/phant.svg');
	    expect(Component.props.alt).to.equal('Phant');
	    expect(Component.props.fallback).to.equal('/assets/images/phant.png');
	  });

	  it('Should make the src match the fallback if onError is fired', function matchImgSrc() {
		  it('Should render an "img" tag with normal attributes', function() {
		  	render((
		  		<Img
	          src="/assets/images/phant.svg"
	          alt="Phant"
	          fallback="/assets/images/phant.png"
	        />), node, function() {
		  		console.log(node);
		  		const img = node.querySelector('img');
		  		expect(img.getAttribute('src')).to.equal('/assets/images/phant.svg');
		  	});
		  });
	  });
	});
});
