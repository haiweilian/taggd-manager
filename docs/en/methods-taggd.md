<a name="Taggd"></a>

## Taggd
**Kind**: global class  

* [Taggd](#Taggd)
    * [new Taggd(image, [options], [data])](#new_Taggd_new)
    * [.on(eventName, handler)](#Taggd+on) ⇒ [<code>Taggd</code>](#Taggd)
    * [.off(eventName, handler)](#Taggd+off) ⇒ [<code>Taggd</code>](#Taggd)
    * [.once(eventName, handler)](#Taggd+once) ⇒ [<code>Taggd</code>](#Taggd)
    * [.setOptions(options)](#Taggd+setOptions) ⇒ [<code>Taggd</code>](#Taggd)
    * [.addTag(tag)](#Taggd+addTag) ⇒ [<code>Taggd</code>](#Taggd)
    * [.getTag(index)](#Taggd+getTag) ⇒ <code>Taggd.Tag</code>
    * [.deleteTag(index)](#Taggd+deleteTag) ⇒ [<code>Taggd</code>](#Taggd)
    * [.setTags(tags)](#Taggd+setTags) ⇒ [<code>Taggd</code>](#Taggd)
    * [.addTags(tags)](#Taggd+addTags) ⇒ [<code>Taggd</code>](#Taggd)
    * [.getTags()](#Taggd+getTags) ⇒ <code>Array.&lt;Taggd.Tag&gt;</code>
    * [.deleteTags()](#Taggd+deleteTags) ⇒ [<code>Taggd</code>](#Taggd)
    * [.map(callback)](#Taggd+map) ⇒ [<code>Taggd</code>](#Taggd)
    * [.destroy()](#Taggd+destroy) ⇒ [<code>Taggd</code>](#Taggd)
    * [.enableEditorMode()](#Taggd+enableEditorMode) ⇒ [<code>Taggd</code>](#Taggd)
    * [.disableEditorMode()](#Taggd+disableEditorMode) ⇒ [<code>Taggd</code>](#Taggd)

<a name="new_Taggd_new"></a>

### new Taggd(image, [options], [data])
Create a new taggd instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| image | <code>HTMLElement</code> |  | The image to wrap |
| [options] | <code>Object</code> | <code>{}</code> | The options |
| [data] | <code>Array</code> | <code>[]</code> | The tags |

<a name="Taggd+on"></a>

### taggd.on(eventName, handler) ⇒ [<code>Taggd</code>](#Taggd)
Subscribe to an event.

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - Current Taggd instance  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | The event to subscribe to. |
| handler | <code>function</code> | The handler to execute. |

<a name="Taggd+off"></a>

### taggd.off(eventName, handler) ⇒ [<code>Taggd</code>](#Taggd)
Unsubscribe from an event.

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - Current Taggd instance  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | The event to unsubscribe from. |
| handler | <code>function</code> | The handler that was used to subscribe. |

<a name="Taggd+once"></a>

### taggd.once(eventName, handler) ⇒ [<code>Taggd</code>](#Taggd)
Subscribe to an event and unsubscribe once triggered.

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - Current Taggd instance  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | The event to subscribe to. |
| handler | <code>function</code> | The handler to execute. |

<a name="Taggd+setOptions"></a>

### taggd.setOptions(options) ⇒ [<code>Taggd</code>](#Taggd)
Set taggd options

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - Current Taggd instance  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options to set |

<a name="Taggd+addTag"></a>

### taggd.addTag(tag) ⇒ [<code>Taggd</code>](#Taggd)
Add a single tag

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - Current Taggd instance  

| Param | Type | Description |
| --- | --- | --- |
| tag | <code>Taggd.Tag</code> | The tag to add |

<a name="Taggd+getTag"></a>

### taggd.getTag(index) ⇒ <code>Taggd.Tag</code>
Get a single tag by index

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: <code>Taggd.Tag</code> - The tag to get  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | The index of the desired tag |

<a name="Taggd+deleteTag"></a>

### taggd.deleteTag(index) ⇒ [<code>Taggd</code>](#Taggd)
Delete a single tag by index

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - Current Taggd instance  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | The index of the desired tag |

<a name="Taggd+setTags"></a>

### taggd.setTags(tags) ⇒ [<code>Taggd</code>](#Taggd)
Set all tags

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - Current Taggd instance  

| Param | Type | Description |
| --- | --- | --- |
| tags | <code>Array.&lt;Taggd.Tag&gt;</code> | An array of tags |

<a name="Taggd+addTags"></a>

### taggd.addTags(tags) ⇒ [<code>Taggd</code>](#Taggd)
Add multiple tags

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - Current Taggd instance  

| Param | Type | Description |
| --- | --- | --- |
| tags | <code>Array.&lt;Taggd.Tag&gt;</code> | An array of tags |

<a name="Taggd+getTags"></a>

### taggd.getTags() ⇒ <code>Array.&lt;Taggd.Tag&gt;</code>
Get all tags

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: <code>Array.&lt;Taggd.Tag&gt;</code> - All tags of this Taggd instance  
<a name="Taggd+deleteTags"></a>

### taggd.deleteTags() ⇒ [<code>Taggd</code>](#Taggd)
Remove all tags

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - Current Taggd instance  
<a name="Taggd+map"></a>

### taggd.map(callback) ⇒ [<code>Taggd</code>](#Taggd)
Iterate and replace all tags

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - Current Taggd instance  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback to execute for all tags |

<a name="Taggd+destroy"></a>

### taggd.destroy() ⇒ [<code>Taggd</code>](#Taggd)
Clean up memory

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - Current Taggd instance  
<a name="Taggd+enableEditorMode"></a>

### taggd.enableEditorMode() ⇒ [<code>Taggd</code>](#Taggd)
Enable editor mode

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - Current Taggd instance  
<a name="Taggd+disableEditorMode"></a>

### taggd.disableEditorMode() ⇒ [<code>Taggd</code>](#Taggd)
Disable editor mode

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - Current Taggd instance  
