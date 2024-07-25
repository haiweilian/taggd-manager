# Events

Using the `.on()`, `.once()` and `.off()` methods you can subscribe and unsubscribe to events.

- All of above mentioned methods are available on `Taggd` and `Tag` instances.
- To subscribe to an event for _all_ tags, subscribe to that event on the `Taggd` instance.

For example:

```js
const image = document.getElementById('my-image');
const taggd = new Taggd(image);

// Prevent adding tags
taggd.on('taggd.tag.add', (tag) => {
  // Some events can be prevented by returning false (see tables below)
  return false;
});

// This tag isn’t added because of above event handler
taggd.add(new Taggd.Tag(..., ...));
```

## Taggd Events

The table below lists all available tables for a `Taggd` instance.

All `taggd.editor*` event handlers receive the following arguments:

1. `Taggd` instance
2. `[tag / position]`

All `taggd.tag*` event handlers receive the following arguments:

1. `Taggd` instance
2. `Tag` instance

| Event                       | Triggered                            | Is preventable by returning `false` |
| --------------------------- | ------------------------------------ | ----------------------------------- |
| `taggd.destroy`             | before destroying a `Taggd` instance | yes                                 |
| `taggd.editor.enable`       | before enable editor mode            | yes                                 |
| `taggd.editor.disable`      | before disabling editor mode         | yes                                 |
| `taggd.editor.load`         | before load image                    | no                                  |
| `taggd.editor.loaded`       | after load image                     | no                                  |
| `taggd.editor.loaderror`    | after error image                    | no                                  |
| `taggd.editor.add`          | after click image(no move trigger)   | no                                  |
| `taggd.editor.zoom`         | after zoom image                     | no                                  |
| `taggd.editor.movedown`     | after movedown image                 | no                                  |
| `taggd.editor.move`         | after move image                     | no                                  |
| `taggd.editor.moveup`       | after moveup image                   | no                                  |
| `taggd.tag.add`             | before adding a tag(move trigger)    | yes                                 |
| `taggd.tag.added`           | after adding a tag                   | no                                  |
| `taggd.tag.delete`          | before deleting a tag                | yes                                 |
| `taggd.tag.deleted`         | after deleting a tag                 | no                                  |
| `taggd.tag.show`            | before showing a tag                 | yes                                 |
| `taggd.tag.shown`           | after showing a tag                  | no                                  |
| `taggd.tag.hide`            | before hiding a tag                  | yes                                 |
| `taggd.tag.hidden`          | after hiding a tag                   | no                                  |
| `taggd.tag.change`          | before changing a tag                | yes                                 |
| `taggd.tag.changed`         | after changing a tag                 | no                                  |
| `taggd.tag.click`           | after click a tag(no move trigger)   | no                                  |
| `taggd.tag.editor.enable`   | before enable editor mode            | yes                                 |
| `taggd.tag.editor.disable`  | before disabling editor mode         | yes                                 |
| `taggd.tag.editor.movedown` | after movedown a tag                 | no                                  |
| `taggd.tag.editor.move`     | after move a tag                     | no                                  |
| `taggd.tag.editor.moveup`   | after moveup a tag(move trigger)     | no                                  |

## Taggd.Tag Events

The table below lists all available tables for a `Tag` instance.

All `taggd.tag.*` event handlers receive the following argument:

1. `Tag` instance

| Event                       | Triggered                          | Is preventable by returning `false` |
| --------------------------- | ---------------------------------- | ----------------------------------- |
| `taggd.tag.delete`          | before deleting a tag              | yes                                 |
| `taggd.tag.deleted`         | after deleting a tag               | no                                  |
| `taggd.tag.show`            | before showing a tag               | yes                                 |
| `taggd.tag.shown`           | after showing a tag                | no                                  |
| `taggd.tag.hide`            | before hiding a tag                | yes                                 |
| `taggd.tag.hidden`          | after hiding a tag                 | no                                  |
| `taggd.tag.change`          | before changing a tag              | yes                                 |
| `taggd.tag.changed`         | after changing a tag               | no                                  |
| `taggd.tag.click`           | after click a tag(no move trigger) | no                                  |
| `taggd.tag.editor.enable`   | before enable editor mode          | yes                                 |
| `taggd.tag.editor.disable`  | before disabling editor mode       | yes                                 |
| `taggd.tag.editor.movedown` | after movedown a tag               | no                                  |
| `taggd.tag.editor.move`     | after move a tag                   | no                                  |
| `taggd.tag.editor.moveup`   | after moveup a tag(move trigger)   | no                                  |
