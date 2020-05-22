import {
  modifier
} from 'ember-modifier';

export default modifier(function ercBarContainerWidth(element, params, hash) {
  let {
    index,
    height,
    space,
    transitionDuration
  } = hash;
  element.style.transitionDuration = transitionDuration;
  element.style.height = height;
  element.style.top = `${(element.offsetHeight + space) * index}px`;
});
