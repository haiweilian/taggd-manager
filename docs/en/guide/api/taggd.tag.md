# Taggd.Tag

### new Tag(position, text, [buttonAttributes], [popupAttributes])
<p>Create a new Tag instance</p>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| position | <code>Object</code> |  | <p>The tag’s coordinates</p> |
| text | <code>String</code> \| <code>function</code> |  | <p>The tag’s content</p> |
| [buttonAttributes] | <code>Object</code> | <code>{}</code> | <p>The button’s attributes</p> |
| [popupAttributes] | <code>Object</code> | <code>{}</code> | <p>The popup’s attributes</p> |

### tag.on(eventName, handler)
<p>Subscribe to an event.</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>The event to subscribe to.</p> |
| handler | <code>function</code> | <p>The handler to execute.</p> |

### tag.off(eventName, handler)
<p>Unsubscribe from an event.</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>The event to unsubscribe from.</p> |
| handler | <code>function</code> | <p>The handler that was used to subscribe.</p> |

### tag.once(eventName, handler)
<p>Subscribe to an event and unsubscribe once triggered.</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>The event to subscribe to.</p> |
| handler | <code>function</code> | <p>The handler to execute.</p> |

### tag.isHidden()
<p>Test whether the tag is hidden or not</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Boolean</code> - <p>A boolean indicating the tag’s state</p>  

### tag.show()
<p>Show the tag</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  

### tag.hide()
<p>Hide the tag</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  

### tag.setText(text)
<p>Set the tag’s text</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> \| <code>function</code> | <p>The tag’s content</p> |

### tag.setPosition(x, y)
<p>Set the tag’s position</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | <p>The tag’s x-coordinate</p> |
| y | <code>Number</code> | <p>The tag’s y-coordinate</p> |

### tag.setButtonAttributes(atttributes)
<p>Set the tag button’s attributes</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| atttributes | <code>Object</code> | <p>= {} - The attributes to set</p> |

### tag.setPopupAttributes(atttributes)
<p>Set the tag popup’s attributes</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| atttributes | <code>Object</code> | <p>= {} - The attributes to set</p> |

### tag.enableEditorMode()
<p>Enable editor mode</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  

### tag.disableEditorMode()
<p>Disable editor mode</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  

### tag.toJSON()
<p>Get a Taggd.createFromObject-compatible object</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Object</code> - <p>A object for JSON</p>  

### Tag.setElementAttributes(element, [attributes])
<p>Set element attributes</p>

**Kind**: static method of [<code>Tag</code>](#Tag)  
**Returns**: <code>DomNode</code> - <p>The original element</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>DomNode</code> |  | <p>The element the attributes should be set to</p> |
| [attributes] | <code>Object</code> | <code>{}</code> | <p>A map of attributes to set</p> |

### Tag.getPositionStyle(x, y)
<p>Get the position style</p>

**Kind**: static method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Object</code> - <p>The style</p>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | <p>The tag’s x-coordinate</p> |
| y | <code>Number</code> | <p>The tag’s y-coordinate</p> |

### Tag.createFromObject(object)
<p>Create a tag from object</p>

**Kind**: static method of [<code>Tag</code>](#Tag)  
**Returns**: [<code>Tag</code>](#Tag) - <p>The created Tag instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | <p>The object containing all information</p> |
