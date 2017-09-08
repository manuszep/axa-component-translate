import React from 'react/addons';
import Translate from '../lib/TranslateLabel.jsx';

describe('Translate', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <Translate/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('translate');
  });
});
