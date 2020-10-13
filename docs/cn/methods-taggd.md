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
创建一个 Taggd 新实例


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| image | <code>HTMLElement</code> |  | 图片元素 |
| [options] | <code>Object</code> | <code>{}</code> | 选项配置 |
| [data] | <code>Array</code> | <code>[]</code> | tags 实例 |

<a name="Taggd+on"></a>

### taggd.on(eventName, handler) ⇒ [<code>Taggd</code>](#Taggd)
订阅事件

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - 当前 Taggd 实例  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | 事件名称 |
| handler | <code>function</code> | 事件回调 |

<a name="Taggd+off"></a>

### taggd.off(eventName, handler) ⇒ [<code>Taggd</code>](#Taggd)
取消订阅事件

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - 当前 Taggd 实例  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | 事件名称 |
| handler | <code>function</code> | 事件回调 |

<a name="Taggd+once"></a>

### taggd.once(eventName, handler) ⇒ [<code>Taggd</code>](#Taggd)
触发一次订阅后，以及取消订阅

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - 当前 Taggd 实例  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | 事件名称 |
| handler | <code>function</code> | 事件回调 |

<a name="Taggd+setOptions"></a>

### taggd.setOptions(options) ⇒ [<code>Taggd</code>](#Taggd)
设置 taggd 选项配置

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - 当前 Taggd 实例  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | 选项配置(options.md) |

<a name="Taggd+addTag"></a>

### taggd.addTag(tag) ⇒ [<code>Taggd</code>](#Taggd)
添加一个 tag

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - 当前 Taggd 实例  

| Param | Type | Description |
| --- | --- | --- |
| tag | <code>Taggd.Tag</code> | tag 实例 |

<a name="Taggd+getTag"></a>

### taggd.getTag(index) ⇒ <code>Taggd.Tag</code>
根据索引获取一个 tag

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: <code>Taggd.Tag</code> - 当前获取到的 tag  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | tag 所在集合的索引 |

<a name="Taggd+deleteTag"></a>

### taggd.deleteTag(index) ⇒ [<code>Taggd</code>](#Taggd)
根据索引删除一个 tag

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - 当前 Taggd 实例  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | tag 所在集合的索引 |

<a name="Taggd+setTags"></a>

### taggd.setTags(tags) ⇒ [<code>Taggd</code>](#Taggd)
设置所有 tag，它会先清空现有的 tag

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - 当前 Taggd 实例  

| Param | Type | Description |
| --- | --- | --- |
| tags | <code>Array.&lt;Taggd.Tag&gt;</code> | tag 数组 |

<a name="Taggd+addTags"></a>

### taggd.addTags(tags) ⇒ [<code>Taggd</code>](#Taggd)
添加多个 tag

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - 当前 Taggd 实例  

| Param | Type | Description |
| --- | --- | --- |
| tags | <code>Array.&lt;Taggd.Tag&gt;</code> | tag 数组 |

<a name="Taggd+getTags"></a>

### taggd.getTags() ⇒ <code>Array.&lt;Taggd.Tag&gt;</code>
获取所有的 tag

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: <code>Array.&lt;Taggd.Tag&gt;</code> - 当前实例的所有 tag 集合  
<a name="Taggd+deleteTags"></a>

### taggd.deleteTags() ⇒ [<code>Taggd</code>](#Taggd)
删除所有的 tag

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - 当前 Taggd 实例  
<a name="Taggd+map"></a>

### taggd.map(callback) ⇒ [<code>Taggd</code>](#Taggd)
遍历所有 tag

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - 当前 Taggd 实例  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | 回调处理函数 |

<a name="Taggd+destroy"></a>

### taggd.destroy() ⇒ [<code>Taggd</code>](#Taggd)
销毁实例

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - 当前 Taggd 实例  
<a name="Taggd+enableEditorMode"></a>

### taggd.enableEditorMode() ⇒ [<code>Taggd</code>](#Taggd)
启用编辑模式，可缩放，移动，添加事件触发

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - 当前 Taggd 实例  
<a name="Taggd+disableEditorMode"></a>

### taggd.disableEditorMode() ⇒ [<code>Taggd</code>](#Taggd)
禁用编辑模式

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - 当前 Taggd 实例  
