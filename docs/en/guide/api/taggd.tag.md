# Taggd.Tag

### new Tag(position, text, [buttonAttributes], [popupAttributes])
<p>Create a new Tag instance</p>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| position | <code>Object</code> |  | <p>The tag’s coordinates</p> |
| text | <code>String</code> \| <code>function</code> |  | <p>The tag’s content</p> |
| [buttonAttributes] | <code>Object</code> | <code>{}</code> | <p>The button’s attributes</p> |
| [popupAttributes] | <code>Object</code> | <code>{}</code> | <p>The popup’s attributes</p> |

<a name="Tag+on"></a>

### tag.on(eventName, handler) ⇒ <code>Taggd.Tag</code>
<p>Subscribe to an event.</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>The event to subscribe to.</p> |
| handler | <code>function</code> | <p>The handler to execute.</p> |

<a name="Tag+off"></a>

### tag.off(eventName, handler) ⇒ <code>Taggd.Tag</code>
<p>Unsubscribe from an event.</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>The event to unsubscribe from.</p> |
| handler | <code>function</code> | <p>The handler that was used to subscribe.</p> |

<a name="Tag+once"></a>

### tag.once(eventName, handler) ⇒ <code>Taggd.Tag</code>
<p>Subscribe to an event and unsubscribe once triggered.</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>The event to subscribe to.</p> |
| handler | <code>function</code> | <p>The handler to execute.</p> |

<a name="Tag+isHidden"></a>

### tag.isHidden() ⇒ <code>Boolean</code>
<p>Test whether the tag is hidden or not</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Boolean</code> - <p>A boolean indicating the tag’s state</p>  
<a name="Tag+show"></a>

### tag.show() ⇒ <code>Taggd.Tag</code>
<p>Show the tag</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  
<a name="Tag+hide"></a>

### tag.hide() ⇒ <code>Taggd.Tag</code>
<p>Hide the tag</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  
<a name="Tag+setText"></a>

### tag.setText(text) ⇒ <code>Taggd.Tag</code>
<p>Set the tag’s text</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> \| <code>function</code> | <p>The tag’s content</p> |

<a name="Tag+setPosition"></a>

### tag.setPosition(x, y) ⇒ <code>Taggd.Tag</code>
<p>Set the tag’s position</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | <p>The tag’s x-coordinate</p> |
| y | <code>Number</code> | <p>The tag’s y-coordinate</p> |

<a name="Tag+setButtonAttributes"></a>

### tag.setButtonAttributes(atttributes) ⇒ <code>Taggd.Tag</code>
<p>Set the tag button’s attributes</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| atttributes | <code>Object</code> | <p>= {} - The attributes to set</p> |

<a name="Tag+setPopupAttributes"></a>

### tag.setPopupAttributes(atttributes) ⇒ <code>Taggd.Tag</code>
<p>Set the tag popup’s attributes</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| atttributes | <code>Object</code> | <p>= {} - The attributes to set</p> |

<a name="Tag+enableEditorMode"></a>

### tag.enableEditorMode() ⇒ <code>Taggd.Tag</code>
<p>Enable editor mode</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  
<a name="Tag+disableEditorMode"></a>

### tag.disableEditorMode() ⇒ <code>Taggd.Tag</code>
<p>Disable editor mode</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>Current Taggd.Tag instance</p>  
<a name="Tag+toJSON"></a>

### tag.toJSON() ⇒ <code>Object</code>
<p>Get a Taggd.createFromObject-compatible object</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Object</code> - <p>A object for JSON</p>  
<a name="Tag.setElementAttributes"></a>

### Tag.setElementAttributes(element, [attributes]) ⇒ <code>DomNode</code>
<p>Set element attributes</p>

**Kind**: static method of [<code>Tag</code>](#Tag)  
**Returns**: <code>DomNode</code> - <p>The original element</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>DomNode</code> |  | <p>The element the attributes should be set to</p> |
| [attributes] | <code>Object</code> | <code>{}</code> | <p>A map of attributes to set</p> |

<a name="Tag.getPositionStyle"></a>

### Tag.getPositionStyle(x, y) ⇒ <code>Object</code>
<p>Get the position style</p>

**Kind**: static method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Object</code> - <p>The style</p>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | <p>The tag’s x-coordinate</p> |
| y | <code>Number</code> | <p>The tag’s y-coordinate</p> |

<a name="Tag.createFromObject"></a>

### Tag.createFromObject(object) ⇒ [<code>Tag</code>](#Tag)
<p>Create a tag from object</p>

**Kind**: static method of [<code>Tag</code>](#Tag)  
**Returns**: [<code>Tag</code>](#Tag) - <p>The created Tag instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | <p>The object containing all information</p> |
