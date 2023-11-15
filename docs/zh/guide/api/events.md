# Events

使用 `.on()` 、`.once()` 和 `.off()` 方法可以订阅和退订事件。

- 以上提到的所有方法都可以在 `Taggd` 和 `Tag` 实例上使用。
- 要订阅所有 `Tag` 的事件，请在 `Taggd` 实例上订阅该事件。

例子：

```js
const image = document.getElementById('my-image');
const taggd = new Taggd(image);

// 防止添加标签
taggd.on('taggd.tag.add', (tag) => {
  // 有些事件可以通过返回 false 来阻止(见下表)
  return false;
});

// 这个标签没有被添加，因为上面的事件处理程序
taggd.add(new Taggd.Tag(..., ...));
```

## Taggd Events

下表列出了 `Taggd` 实例的所有可用事件。

所有的 `taggd.editor*` 事件处理回调接收以下参数：

1. `Taggd` instance
2. `[position]` x/y/left/top

所有的 `taggd.tag*` 事件处理回调接收以下参数：

1. `Taggd` instance
2. `Tag` instance

| Event                       | Triggered                            | Is preventable by returning `false` |
|-----------------------------|--------------------------------------|-------------------------------------|
| `taggd.destroy`             | 销毁 `Taggd` 实例之前                 | yes                                 |
| `taggd.editor.enable`       | 启用编辑器模式之前                     | yes                                 |
| `taggd.editor.disable`      | 禁用编辑器模式之前                     | yes                                 |
| `taggd.editor.load`         | 加载图片之前                          | no                                  |
| `taggd.editor.loaded`       | 加载图片成功                          | no                                  |
| `taggd.editor.loaderror`    | 加载图片失败                          | no                                  |
| `taggd.editor.add`          | 点击图片区域(没有移动触发)              | no                                  |
| `taggd.editor.zoom`         | 图片缩放                              | no                                  |
| `taggd.editor.movedown`     | 图片移动开始                          | no                                  |
| `taggd.editor.move`         | 图片移动中                            | no                                  |
| `taggd.editor.moveup`       | 图片移动结束(有移动触发)                | no                                  |
| `taggd.tag.add`             | 添加标记之前                          | yes                                 |
| `taggd.tag.added`           | 添加标记后                            | no                                  |
| `taggd.tag.delete`          | 删除标记之前                          | yes                                 |
| `taggd.tag.deleted`         | 删除标记后                            | no                                  |
| `taggd.tag.show`            | 显示标记之前                          | yes                                 |
| `taggd.tag.shown`           | 显示标记之后                          | no                                  |
| `taggd.tag.hide`            | 隐藏标记之前                          | yes                                 |
| `taggd.tag.hidden`          | 隐藏标记之后                          | no                                  |
| `taggd.tag.change`          | 更改标记之前                          | yes                                 |
| `taggd.tag.changed`         | 更改标记后                            | no                                  |
| `taggd.tag.click`           | 点击标记后(没有移动触发)                | no                                  |
| `taggd.tag.editor.enable`   | 标记启用编辑器模式之前                 | yes                                 |
| `taggd.tag.editor.disable`  | 标记禁用编辑器模式之前                 | yes                                 |
| `taggd.tag.editor.movedown` | 标记移动开始                          | no                                  |
| `taggd.tag.editor.move`     | 标记移动中                            | no                                  |
| `taggd.tag.editor.moveup`   | 标记移动结束(有移动触发)                | no                                  |

## Taggd.Tag Events

下表列出了一个 `Tag` 实例的所有可用事件。

所有的 `taggd.tag*` 事件处理回调接收到以下参数：

1. `Tag` instance

| Event                       | Triggered                            | Is preventable by returning `false` |
|-----------------------------|--------------------------------------|-------------------------------------|
| `taggd.tag.delete`          | 删除标记之前                          | yes                                 |
| `taggd.tag.deleted`         | 删除标记后                            | no                                  |
| `taggd.tag.show`            | 显示标记之前                          | yes                                 |
| `taggd.tag.shown`           | 显示标记之后                          | no                                  |
| `taggd.tag.hide`            | 隐藏标记之前                          | yes                                 |
| `taggd.tag.hidden`          | 隐藏标记之后                          | no                                  |
| `taggd.tag.change`          | 更改标记之前                          | yes                                 |
| `taggd.tag.changed`         | 更改标记后                            | no                                  |
| `taggd.tag.click`           | 点击标记后(没有移动触发)                | no                                  |
| `taggd.tag.editor.enable`   | 标记启用编辑器模式之前                 | yes                                 |
| `taggd.tag.editor.disable`  | 标记禁用编辑器模式之前                 | yes                                 |
| `taggd.tag.editor.movedown` | 标记移动开始                          | no                                  |
| `taggd.tag.editor.move`     | 标记移动中                            | no                                  |
| `taggd.tag.editor.moveup`   | 标记移动结束(有移动触发)                | no                                  |
