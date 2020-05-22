import { modifier } from 'ember-modifier';

export default modifier(function ercBarStyle(element, params, hash) {
  let {
    value = 0,
    max,
    barColor,
    transitionDuration
  } = hash;
  element.style.transitionDuration = transitionDuration;
  element.style.backgroundColor = barColor;
  element.style.flex = `0 0 ${value*100/max}%`;
});
