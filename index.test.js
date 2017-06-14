const React = require('./node_modules/react');
var GoogleUrlShortner = require('./index');
const shallow = require('enzyme');

describe('Show App', () => {
  it('Check whether app is present', () => {
    const component = shallow(<GoogleUrlShortner />);
    expect(component).toHaveLength(1);
  });
});
