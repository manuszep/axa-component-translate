# Translate

Get the AMD module located at `translate.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'Translate': 'translate'
  }
});

require(['react', 'Translate'], function(React, Translate) {

  React.render(React.createElement(Translate), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
