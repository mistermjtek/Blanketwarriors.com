'use strict';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Img from './Img';

describe('Atom', function() {
	describe('Img', function() {
		var shallowRenderer;
		var node;

		beforeEach(function() {
			node = document.createElement('div');
			shallowRenderer = TestUtils.createRenderer();
		});

	  it('Should render an `img` tag with appropriate props', function renderImg() {
			shallowRenderer.render(
				<Img
          src="assets/images/phant.svg"
          alt="Phant"
          fallback="assets/images/phant.png"
        />
       );
			const Component = shallowRenderer.getRenderOutput();
	    expect(Component.type).to.equal('img');
	    expect(Component.props.src).to.equal('assets/images/phant.svg');
	    expect(Component.props.alt).to.equal('Phant');
	    expect(Component.props.fallback).to.equal('assets/images/phant.png');
	  });

	  it('Should make the src match the fallback if onError is fired', function matchImgSrc() {
	  	const Component = TestUtils.renderIntoDocument(
	  		<Img
          src="assets/images/phant.svg"
          alt="Phant"
          fallback="assets/images/phant.png"
        />);
	  	expect(Component.state.src).to.equal('assets/images/phant.svg');
  		TestUtils.Simulate.error(TestUtils.findRenderedDOMComponentWithTag(Component, 'img'));
		  expect(Component.state.src).to.equal('assets/images/phant.png');
	  });
	});
});
