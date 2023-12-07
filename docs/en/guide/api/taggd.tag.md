# Taggd.Tag

### new Tag(position, text, [buttonAttributes], [popupAttributes])

Create a new Tag instance

| Param              | Type               | Default | Description             |
| ------------------ | ------------------ | ------- | ----------------------- |
| position           | Object             |         | The tag’s coordinates   |
| text               | String \| function |         | The tag’s content       |
| [buttonAttributes] | Object             | {}      | The button’s attributes |
| [popupAttributes]  | Object             | {}      | The popup’s attributes  |

### tag.on(eventName, handler)

Subscribe to an event.

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - Current Taggd.Tag instance

| Param     | Type     | Description                |
| --------- | -------- | -------------------------- |
| eventName | String   | The event to subscribe to. |
| handler   | function | The handler to execute.    |

### tag.off(eventName, handler)

Unsubscribe from an event.

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - Current Taggd.Tag instance

| Param     | Type     | Description                             |
| --------- | -------- | --------------------------------------- |
| eventName | String   | The event to unsubscribe from.          |
| handler   | function | The handler that was used to subscribe. |

### tag.once(eventName, handler)

Subscribe to an event and unsubscribe once triggered.

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - Current Taggd.Tag instance

| Param     | Type     | Description                |
| --------- | -------- | -------------------------- |
| eventName | String   | The event to subscribe to. |
| handler   | function | The handler to execute.    |

### tag.isHidden()

Test whether the tag is hidden or not

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Boolean - A boolean indicating the tag’s state

### tag.show()

Show the tag

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - Current Taggd.Tag instance

### tag.hide()

Hide the tag

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - Current Taggd.Tag instance

### tag.setText(text)

Set the tag’s text

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - Current Taggd.Tag instance

| Param | Type               | Description       |
| ----- | ------------------ | ----------------- |
| text  | String \| function | The tag’s content |

### tag.setPosition(x, y)

Set the tag’s position

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - Current Taggd.Tag instance

| Param | Type   | Description            |
| ----- | ------ | ---------------------- |
| x     | Number | The tag’s x-coordinate |
| y     | Number | The tag’s y-coordinate |

### tag.setButtonAttributes(atttributes)

Set the tag button’s attributes

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - Current Taggd.Tag instance

| Param       | Type   | Description                  |
| ----------- | ------ | ---------------------------- |
| atttributes | Object | = {} - The attributes to set |

### tag.setPopupAttributes(atttributes)

Set the tag popup’s attributes

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - Current Taggd.Tag instance

| Param       | Type   | Description                  |
| ----------- | ------ | ---------------------------- |
| atttributes | Object | = {} - The attributes to set |

### tag.enableEditorMode()

Enable editor mode

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - Current Taggd.Tag instance

### tag.disableEditorMode()

Disable editor mode

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - Current Taggd.Tag instance

### tag.toJSON()

Get a Taggd.createFromObject-compatible object

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Object - A object for JSON

### Tag.setElementAttributes(element, [attributes])

Set element attributes

**Kind**: static method of [Tag](#Tag)  
**Returns**: DomNode - The original element

| Param        | Type    | Default | Description                                 |
| ------------ | ------- | ------- | ------------------------------------------- |
| element      | DomNode |         | The element the attributes should be set to |
| [attributes] | Object  | {}      | A map of attributes to set                  |

### Tag.getPositionStyle(x, y)

Get the position style

**Kind**: static method of [Tag](#Tag)  
**Returns**: Object - The style

| Param | Type   | Description            |
| ----- | ------ | ---------------------- |
| x     | Number | The tag’s x-coordinate |
| y     | Number | The tag’s y-coordinate |

### Tag.createFromObject(object)

Create a tag from object

**Kind**: static method of [Tag](#Tag)  
**Returns**: [Tag](#Tag) - The created Tag instance

| Param  | Type   | Description                           |
| ------ | ------ | ------------------------------------- |
| object | Object | The object containing all information |
