# Taggd

### new Taggd(image, [options], [data])

创建一个 Taggd 新实例

| Param     | Type        | Default | Description |
| --------- | ----------- | ------- | ----------- |
| image     | HTMLElement |         | 图片元素    |
| [options] | Object      | {}      | 选项配置    |
| [data]    | Array       | []      | tags 实例   |

### taggd.on(eventName, handler)

订阅事件

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - 当前 Taggd 实例

| Param     | Type     | Description |
| --------- | -------- | ----------- |
| eventName | String   | 事件名称    |
| handler   | function | 事件回调    |

### taggd.off(eventName, handler)

取消订阅事件

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - 当前 Taggd 实例

| Param     | Type     | Description |
| --------- | -------- | ----------- |
| eventName | String   | 事件名称    |
| handler   | function | 事件回调    |

### taggd.once(eventName, handler)

触发一次订阅后，立即取消订阅

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - 当前 Taggd 实例

| Param     | Type     | Description |
| --------- | -------- | ----------- |
| eventName | String   | 事件名称    |
| handler   | function | 事件回调    |

### taggd.setOptions(options)

设置 taggd 选项配置

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - 当前 Taggd 实例

| Param   | Type   | Description          |
| ------- | ------ | -------------------- |
| options | Object | 选项配置(options.md) |

### taggd.addTag(tag)

添加一个 tag

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - 当前 Taggd 实例

| Param | Type      | Description |
| ----- | --------- | ----------- |
| tag   | Taggd.Tag | tag 实例    |

### taggd.getTag(index) ⇒ Taggd.Tag

根据索引获取一个 tag

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: Taggd.Tag - 当前获取到的 tag

| Param | Type   | Description        |
| ----- | ------ | ------------------ |
| index | Number | tag 所在集合的索引 |

### taggd.deleteTag(index)

根据索引删除一个 tag

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - 当前 Taggd 实例

| Param | Type   | Description        |
| ----- | ------ | ------------------ |
| index | Number | tag 所在集合的索引 |

### taggd.setTags(tags)

设置所有 tag，它会先清空现有的 tag

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - 当前 Taggd 实例

| Param | Type                    | Description |
| ----- | ----------------------- | ----------- |
| tags  | Array.&lt;Taggd.Tag&gt; | tag 数组    |

### taggd.addTags(tags)

添加多个 tag

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - 当前 Taggd 实例

| Param | Type                    | Description |
| ----- | ----------------------- | ----------- |
| tags  | Array.&lt;Taggd.Tag&gt; | tag 数组    |

### taggd.getTags()

获取所有的 tag

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: Array.&lt;Taggd.Tag&gt; - 当前实例的所有 tag 集合

### taggd.deleteTags()

删除所有的 tag

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - 当前 Taggd 实例

### taggd.map(callback)

遍历所有 tag

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - 当前 Taggd 实例

| Param    | Type     | Description  |
| -------- | -------- | ------------ |
| callback | function | 回调处理函数 |

### taggd.destroy()

销毁实例

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - 当前 Taggd 实例

### taggd.enableEditorMode()

启用编辑模式，可缩放，移动，添加事件触发

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - 当前 Taggd 实例

### taggd.disableEditorMode()

禁用编辑模式

**Kind**: instance method of [Taggd](#Taggd)  
**Returns**: [Taggd](#Taggd) - 当前 Taggd 实例
