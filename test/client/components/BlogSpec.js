var React;
var ReactTestUtils;
var Blog;
var Component;
var shallowRenderer;

describe('Component', function() {
	describe('Blog', function() {

		beforeEach(function() {
			React = require('react');
			Blog = require('../../../app/components/Blog');
			ReactTestUtils = require('react/lib/ReactTestUtils');

			shallowRenderer = ReactTestUtils.createRenderer();
		});

	  it('Should render', function() {
	  	const blogPosts = [{index: 1}];
			shallowRenderer.render(<Blog collections={{blogPosts}} />);
			Component = shallowRenderer.getRenderOutput();
	    expect(Component).to.exist;
	  });
	});
});
