var React;
var ReactTestUtils;
var Blog;
var Component;
var shallowRenderer;

describe('Component', function() {
	describe('Blog', function() {

		beforeEach(function() {
			React = require('react');
			ReactTestUtils = require('react/lib/ReactTestUtils');
			Blog = require('app/components/Blog');

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
