# Options

`options` 参数是选项对象。

```js
options = {
  // 显示标签的事件
  show: 'mouseenter',
  // 隐藏标记的事件
  hide: 'mouseleave',
  // 触发添加标记事件
  addEvent: 'dblclick',
  // 缩放比率
  zoomRatio: 0.1,
  // 最小缩放比例
  zoomRatioMin: 0.01,
  // 最大缩放比例
  zoomRatioMax: 100,
  // 如果标签按钮和弹出窗口之间有间隔，并且你使用鼠标移过/鼠标移出来切换可见性，你可能需要保持这个。
  hideDelay: 500,
}

new Taggd(image, options)
```
