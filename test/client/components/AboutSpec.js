import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import About from '../../../app/components/About';

describe('List Component', function() {
  it('renders', function() {
    var element = TestUtils.renderIntoDocument(<About />);
    expect(element).toBeTruthy();
  });
});
