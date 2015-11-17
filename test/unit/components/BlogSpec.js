import collections from 'fixtures/collections';
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
			shallowRenderer.render(<Blog collections={collections} />);
			Component = shallowRenderer.getRenderOutput();
	    expect(Component).to.exist;
	  });
	});
});
