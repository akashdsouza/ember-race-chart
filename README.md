ember-race-chart
==============================================================================

[![Build Status](https://travis-ci.com/akashdsouza/ember-race-chart.svg?branch=master)](https://travis-ci.com/akashdsouza/ember-race-chart)

Ember addon for rendering race charts with bars. The idea for this addon was inspired from [chart-race-react](https://github.com/Mckinsey666/chart-race-react).

[Demo](https://akashdsouza.github.io/ember-race-chart/)


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-race-chart
```


Usage
------------------------------------------------------------------------------

The `ember-race-chart` component accepts `data` object where each key is the period and its value is an array of key, value pairs to be displayed in the race chart.

```hbs
<EmberRaceChart @data={{@data}} />
```

```js
// Sample data
data = {
  Morning: [{
    key: "Apple",
    value: 10
  }, {
    key: "Orange",
    value: 20
  }],
  Afternoon: [{
    key: "Apple",
    value: 8
  }, {
    key: "Orange",
    value: 14
  }],
  Night: [{
    key: "Apple",
    value: 3
  }, {
    key: "Orange",
    value: 10
  }]
}
```

Options
------------------------------------------------------------------------------

`interval`
Time interval between periods in `ms`. Default value is `10`.

`sort`
Sort order for the bars. It accepts one of the following values: `asc`, `desc`, `none`. Default is `desc`.

`barColor`
Color of the bar. Default is `#000`.

`height`
Height of bar in any acceptable css format `px/percentage/em/rem`. Default is `30px`.

`space`
Space between bars in `px`. Default is `10`.

`positionTransitionDuration`
Duration for transition between bar position in any acceptable css duration format. Default is `500ms`.

`widthTransitionDuration`
Duration for bar width transition in any acceptable css duration format. Default is `500ms`.

`keyWidth`
Width for bar key in any acceptable css format `px/percentage/em/rem`. Default is `200px`.


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
