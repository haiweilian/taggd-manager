# Options

The `options` parameter is an object of options.

```js
options = {
  // The event to show the tag
  show: 'mouseenter',
  // The event to hide the tag
  hide: 'mouseleave',
  // The event triggers the add tag
  addEvent: 'dblclick',
  // The zoom ratio
  zoomRatio: 0.1,
  // The min zoom ratio
  zoomRatioMin: 0.01,
  // The max zoom ratio
  zoomRatioMax: 100,
  // The duration before the tag popup is actually hidden.
  // If there is spacing between the tag button and popup, and you use mouseover/mouseout to toggle visiblity, you probably want to keep this.
  hideDelay: 500,
};

new Taggd(image, options);
```
