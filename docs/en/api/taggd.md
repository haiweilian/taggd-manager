# Taggd

### new Taggd(image, [options], [data])

Create a new taggd instance

| Param     | Type        | Default | Description       |
| --------- | ----------- | ------- | ----------------- |
| image     | HTMLElement |         | The image to wrap |
| [options] | Object      | {}      | The options       |
| [data]    | Array       | []      | The tags          |

### taggd.on(eventName, handler)

Subscribe to an event.

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - Current Taggd instance

| Param     | Type     | Description                |
| --------- | -------- | -------------------------- |
| eventName | String   | The event to subscribe to. |
| handler   | function | The handler to execute.    |

### taggd.off(eventName, handler)

Unsubscribe from an event.

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - Current Taggd instance

| Param     | Type     | Description                             |
| --------- | -------- | --------------------------------------- |
| eventName | String   | The event to unsubscribe from.          |
| handler   | function | The handler that was used to subscribe. |

### taggd.once(eventName, handler)

Subscribe to an event and unsubscribe once triggered.

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - Current Taggd instance

| Param     | Type     | Description                |
| --------- | -------- | -------------------------- |
| eventName | String   | The event to subscribe to. |
| handler   | function | The handler to execute.    |

### taggd.setOptions(options)

Set taggd options

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - Current Taggd instance

| Param   | Type   | Description        |
| ------- | ------ | ------------------ |
| options | Object | The options to set |

### taggd.addTag(tag)

Add a single tag

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - Current Taggd instance

| Param | Type      | Description    |
| ----- | --------- | -------------- |
| tag   | Taggd.Tag | The tag to add |

### taggd.getTag(index)

Get a single tag by index

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: Taggd.Tag - The tag to get

| Param | Type   | Description                  |
| ----- | ------ | ---------------------------- |
| index | Number | The index of the desired tag |

### taggd.deleteTag(index)

Delete a single tag by index

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - Current Taggd instance

| Param | Type   | Description                  |
| ----- | ------ | ---------------------------- |
| index | Number | The index of the desired tag |

### taggd.setTags(tags)

Set all tags

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - Current Taggd instance

| Param | Type                    | Description      |
| ----- | ----------------------- | ---------------- |
| tags  | Array.&lt;Taggd.Tag&gt; | An array of tags |

### taggd.addTags(tags)

Add multiple tags

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - Current Taggd instance

| Param | Type                    | Description      |
| ----- | ----------------------- | ---------------- |
| tags  | Array.&lt;Taggd.Tag&gt; | An array of tags |

### taggd.getTags()

Get all tags

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: Array.&lt;Taggd.Tag&gt; - All tags of this Taggd instance

### taggd.deleteTags()

Remove all tags

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - Current Taggd instance

### taggd.map(callback)

Iterate and replace all tags

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - Current Taggd instance

| Param    | Type     | Description                          |
| -------- | -------- | ------------------------------------ |
| callback | function | The callback to execute for all tags |

### taggd.toJSON()

Get all tags json

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: Array - A array for JSON

### taggd.destroy()

Clean up memory

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - Current Taggd instance

### taggd.enableEditorMode()

Enable editor mode

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - Current Taggd instance

### taggd.disableEditorMode()

Disable editor mode

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - Current Taggd instance
