var React;
var ReactTestUtils;
var About;
var Component;
var shallowRenderer;

describe('Component', function() {
	describe('About', function() {

		beforeEach(function() {
			React = require('react');
			ReactTestUtils = require('react/lib/ReactTestUtils');
			About = require('../../../app/components/About');
			shallowRenderer = ReactTestUtils.createRenderer();
		});

	  it('Should render', function() {
			shallowRenderer.render(<About />);
			Component = shallowRenderer.getRenderOutput();
	    expect(Component).to.exist;
	  });

	  it('Should have correct classes', function() {
	  	shallowRenderer.render(<About />);
	  	Component = shallowRenderer.getRenderOutput();
			expect(Component.props.className).to.equal('about wrapper');
			expect(Component.props.children.props.className).to.equal('content');
	  });

	  it('Should correctly display heading text', function() {
	  	Component = ReactTestUtils.renderIntoDocument(<About />);
	  	const h1 = ReactTestUtils.findRenderedDOMComponentWithTag(Component, 'h1');
	  	expect(h1.innerText).to.equal('We are Blanket Warriors');
	  });

		afterEach(function() {
			Component = null;
		});
	});
});
