import { modifier } from 'ember-modifier';

export default modifier(function ercContainerStyle(element, params, hash) {
  let {
    count = 0,
    space
  } = hash;
  if (element.firstElementChild) {
    element.style.height = `${(element.firstElementChild.offsetHeight + space) * count}px`;
  }
});
