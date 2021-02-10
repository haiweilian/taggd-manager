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
<p>Create a new taggd instance</p>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| image | <code>HTMLElement</code> |  | <p>The image to wrap</p> |
| [options] | <code>Object</code> | <code>{}</code> | <p>The options</p> |
| [data] | <code>Array</code> | <code>[]</code> | <p>The tags</p> |

<a name="Taggd+on"></a>

### taggd.on(eventName, handler) ⇒ [<code>Taggd</code>](#Taggd)
<p>Subscribe to an event.</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>The event to subscribe to.</p> |
| handler | <code>function</code> | <p>The handler to execute.</p> |

<a name="Taggd+off"></a>

### taggd.off(eventName, handler) ⇒ [<code>Taggd</code>](#Taggd)
<p>Unsubscribe from an event.</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>The event to unsubscribe from.</p> |
| handler | <code>function</code> | <p>The handler that was used to subscribe.</p> |

<a name="Taggd+once"></a>

### taggd.once(eventName, handler) ⇒ [<code>Taggd</code>](#Taggd)
<p>Subscribe to an event and unsubscribe once triggered.</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>The event to subscribe to.</p> |
| handler | <code>function</code> | <p>The handler to execute.</p> |

<a name="Taggd+setOptions"></a>

### taggd.setOptions(options) ⇒ [<code>Taggd</code>](#Taggd)
<p>Set taggd options</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | <p>The options to set</p> |

<a name="Taggd+addTag"></a>

### taggd.addTag(tag) ⇒ [<code>Taggd</code>](#Taggd)
<p>Add a single tag</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| tag | <code>Taggd.Tag</code> | <p>The tag to add</p> |

<a name="Taggd+getTag"></a>

### taggd.getTag(index) ⇒ <code>Taggd.Tag</code>
<p>Get a single tag by index</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: <code>Taggd.Tag</code> - <p>The tag to get</p>  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | <p>The index of the desired tag</p> |

<a name="Taggd+deleteTag"></a>

### taggd.deleteTag(index) ⇒ [<code>Taggd</code>](#Taggd)
<p>Delete a single tag by index</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | <p>The index of the desired tag</p> |

<a name="Taggd+setTags"></a>

### taggd.setTags(tags) ⇒ [<code>Taggd</code>](#Taggd)
<p>Set all tags</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| tags | <code>Array.&lt;Taggd.Tag&gt;</code> | <p>An array of tags</p> |

<a name="Taggd+addTags"></a>

### taggd.addTags(tags) ⇒ [<code>Taggd</code>](#Taggd)
<p>Add multiple tags</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| tags | <code>Array.&lt;Taggd.Tag&gt;</code> | <p>An array of tags</p> |

<a name="Taggd+getTags"></a>

### taggd.getTags() ⇒ <code>Array.&lt;Taggd.Tag&gt;</code>
<p>Get all tags</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: <code>Array.&lt;Taggd.Tag&gt;</code> - <p>All tags of this Taggd instance</p>  
<a name="Taggd+deleteTags"></a>

### taggd.deleteTags() ⇒ [<code>Taggd</code>](#Taggd)
<p>Remove all tags</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  
<a name="Taggd+map"></a>

### taggd.map(callback) ⇒ [<code>Taggd</code>](#Taggd)
<p>Iterate and replace all tags</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <p>The callback to execute for all tags</p> |

<a name="Taggd+destroy"></a>

### taggd.destroy() ⇒ [<code>Taggd</code>](#Taggd)
<p>Clean up memory</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  
<a name="Taggd+enableEditorMode"></a>

### taggd.enableEditorMode() ⇒ [<code>Taggd</code>](#Taggd)
<p>Enable editor mode</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  
<a name="Taggd+disableEditorMode"></a>

### taggd.disableEditorMode() ⇒ [<code>Taggd</code>](#Taggd)
<p>Disable editor mode</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  
