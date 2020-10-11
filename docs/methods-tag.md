<a name="Tag"></a>

## Tag
**Kind**: global class  

* [Tag](#Tag)
    * [new Tag(position, text, [buttonAttributes], [popupAttributes])](#new_Tag_new)
    * _instance_
        * [.on(eventName, handler)](#Tag+on) ⇒ <code>Taggd</code>
        * [.off(eventName, handler)](#Tag+off) ⇒ <code>Taggd</code>
        * [.once(eventName, handler)](#Tag+once) ⇒ <code>Taggd</code>
        * [.isHidden()](#Tag+isHidden) ⇒ <code>Boolean</code>
        * [.show()](#Tag+show) ⇒ <code>Taggd.Tag</code>
        * [.hide()](#Tag+hide) ⇒ <code>Taggd.Tag</code>
        * [.setText(text)](#Tag+setText) ⇒ <code>Taggd.Tag</code>
        * [.setPosition(x, y)](#Tag+setPosition) ⇒ <code>Taggd.Tag</code>
        * [.setButtonAttributes(atttributes)](#Tag+setButtonAttributes) ⇒ <code>Taggd.Tag</code>
        * [.setPopupAttributes(atttributes)](#Tag+setPopupAttributes) ⇒ <code>Taggd.Tag</code>
        * [.enableEditorMode()](#Tag+enableEditorMode) ⇒ <code>Taggd.Tag</code>
        * [.disableEditorMode()](#Tag+disableEditorMode) ⇒ <code>Taggd.Tag</code>
        * [.toJSON()](#Tag+toJSON) ⇒ <code>Object</code>
    * _static_
        * [.setElementAttributes(element, [attributes])](#Tag.setElementAttributes) ⇒ <code>DomNode</code>
        * [.getPositionStyle(x, y)](#Tag.getPositionStyle) ⇒ <code>Object</code>
        * [.createFromObject(object)](#Tag.createFromObject) ⇒ [<code>Tag</code>](#Tag)

<a name="new_Tag_new"></a>

### new Tag(position, text, [buttonAttributes], [popupAttributes])
Create a new Tag instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| position | <code>Object</code> |  | The tag’s coordinates |
| text | <code>String</code> \| <code>function</code> |  | The tag’s content |
| [buttonAttributes] | <code>Object</code> | <code>{}</code> | The button’s attributes |
| [popupAttributes] | <code>Object</code> | <code>{}</code> | The popup’s attributes |

<a name="Tag+on"></a>

### tag.on(eventName, handler) ⇒ <code>Taggd</code>
Subscribe to an event.

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd</code> - Current Taggd instance  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | The event to subscribe to. |
| handler | <code>function</code> | The handler to execute. |

<a name="Tag+off"></a>

### tag.off(eventName, handler) ⇒ <code>Taggd</code>
Unsubscribe from an event.

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd</code> - Current Taggd instance  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | The event to unsubscribe from. |
| handler | <code>function</code> | The handler that was used to subscribe. |

<a name="Tag+once"></a>

### tag.once(eventName, handler) ⇒ <code>Taggd</code>
Subscribe to an event and unsubscribe once triggered.

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd</code> - Current Taggd instance  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | The event to subscribe to. |
| handler | <code>function</code> | The handler to execute. |

<a name="Tag+isHidden"></a>

### tag.isHidden() ⇒ <code>Boolean</code>
Test whether the tag is hidden or not

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Boolean</code> - A boolean indicating the tag’s state  
<a name="Tag+show"></a>

### tag.show() ⇒ <code>Taggd.Tag</code>
Show the tag

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - Current Tag  
<a name="Tag+hide"></a>

### tag.hide() ⇒ <code>Taggd.Tag</code>
Hide the tag

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - Current Tag  
<a name="Tag+setText"></a>

### tag.setText(text) ⇒ <code>Taggd.Tag</code>
Set the tag’s text

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - Current Tag  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> \| <code>function</code> | The tag’s content |

<a name="Tag+setPosition"></a>

### tag.setPosition(x, y) ⇒ <code>Taggd.Tag</code>
Set the tag’s position

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - Current Tag  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | The tag’s x-coordinate |
| y | <code>Number</code> | The tag’s y-coordinate |

<a name="Tag+setButtonAttributes"></a>

### tag.setButtonAttributes(atttributes) ⇒ <code>Taggd.Tag</code>
Set the tag button’s attributes

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - Current tag  

| Param | Type | Description |
| --- | --- | --- |
| atttributes | <code>Object</code> | = {} - The attributes to set |

<a name="Tag+setPopupAttributes"></a>

### tag.setPopupAttributes(atttributes) ⇒ <code>Taggd.Tag</code>
Set the tag popup’s attributes

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - Current tag  

| Param | Type | Description |
| --- | --- | --- |
| atttributes | <code>Object</code> | = {} - The attributes to set |

<a name="Tag+enableEditorMode"></a>

### tag.enableEditorMode() ⇒ <code>Taggd.Tag</code>
Enable editor mode

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - Current tag  
<a name="Tag+disableEditorMode"></a>

### tag.disableEditorMode() ⇒ <code>Taggd.Tag</code>
Disable editor mode

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - Current tag  
<a name="Tag+toJSON"></a>

### tag.toJSON() ⇒ <code>Object</code>
Get a Taggd.createFromObject-compatible object

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Object</code> - A object for JSON  
<a name="Tag.setElementAttributes"></a>

### Tag.setElementAttributes(element, [attributes]) ⇒ <code>DomNode</code>
Set element attributes

**Kind**: static method of [<code>Tag</code>](#Tag)  
**Returns**: <code>DomNode</code> - The original element  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>DomNode</code> |  | The element the attributes should be set to |
| [attributes] | <code>Object</code> | <code>{}</code> | A map of attributes to set |

<a name="Tag.getPositionStyle"></a>

### Tag.getPositionStyle(x, y) ⇒ <code>Object</code>
Get the position style

**Kind**: static method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Object</code> - The style  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | The tag’s x-coordinate |
| y | <code>Number</code> | The tag’s y-coordinate |

<a name="Tag.createFromObject"></a>

### Tag.createFromObject(object) ⇒ [<code>Tag</code>](#Tag)
Create a tag from object

**Kind**: static method of [<code>Tag</code>](#Tag)  
**Returns**: [<code>Tag</code>](#Tag) - The created Tag instance  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The object containing all information |

