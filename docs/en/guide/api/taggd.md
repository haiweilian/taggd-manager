# Taggd

### new Taggd(image, [options], [data])
<p>Create a new taggd instance</p>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| image | <code>HTMLElement</code> |  | <p>The image to wrap</p> |
| [options] | <code>Object</code> | <code>{}</code> | <p>The options</p> |
| [data] | <code>Array</code> | <code>[]</code> | <p>The tags</p> |

### taggd.on(eventName, handler)
<p>Subscribe to an event.</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>The event to subscribe to.</p> |
| handler | <code>function</code> | <p>The handler to execute.</p> |

### taggd.off(eventName, handler)
<p>Unsubscribe from an event.</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>The event to unsubscribe from.</p> |
| handler | <code>function</code> | <p>The handler that was used to subscribe.</p> |

### taggd.once(eventName, handler)
<p>Subscribe to an event and unsubscribe once triggered.</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>The event to subscribe to.</p> |
| handler | <code>function</code> | <p>The handler to execute.</p> |

### taggd.setOptions(options)
<p>Set taggd options</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | <p>The options to set</p> |

### taggd.addTag(tag)
<p>Add a single tag</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| tag | <code>Taggd.Tag</code> | <p>The tag to add</p> |

### taggd.getTag(index)
<p>Get a single tag by index</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: <code>Taggd.Tag</code> - <p>The tag to get</p>  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | <p>The index of the desired tag</p> |

### taggd.deleteTag(index)
<p>Delete a single tag by index</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | <p>The index of the desired tag</p> |

### taggd.setTags(tags)
<p>Set all tags</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| tags | <code>Array.&lt;Taggd.Tag&gt;</code> | <p>An array of tags</p> |

### taggd.addTags(tags)
<p>Add multiple tags</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| tags | <code>Array.&lt;Taggd.Tag&gt;</code> | <p>An array of tags</p> |

### taggd.getTags()
<p>Get all tags</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: <code>Array.&lt;Taggd.Tag&gt;</code> - <p>All tags of this Taggd instance</p>  

### taggd.deleteTags()
<p>Remove all tags</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

### taggd.map(callback)
<p>Iterate and replace all tags</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <p>The callback to execute for all tags</p> |

### taggd.destroy()
<p>Clean up memory</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

### taggd.enableEditorMode()
<p>Enable editor mode</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  

### taggd.disableEditorMode()
<p>Disable editor mode</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>Current Taggd instance</p>  
