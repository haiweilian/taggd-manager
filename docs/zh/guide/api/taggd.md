# Taggd

### new Taggd(image, [options], [data])
<p>创建一个 Taggd 新实例</p>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| image | <code>HTMLElement</code> |  | <p>图片元素</p> |
| [options] | <code>Object</code> | <code>{}</code> | <p>选项配置</p> |
| [data] | <code>Array</code> | <code>[]</code> | <p>tags 实例</p> |

<a name="Taggd+on"></a>

### taggd.on(eventName, handler)
<p>订阅事件</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>事件名称</p> |
| handler | <code>function</code> | <p>事件回调</p> |

### taggd.off(eventName, handler)
<p>取消订阅事件</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>事件名称</p> |
| handler | <code>function</code> | <p>事件回调</p> |

### taggd.once(eventName, handler)
<p>触发一次订阅后，立即取消订阅</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>事件名称</p> |
| handler | <code>function</code> | <p>事件回调</p> |

### taggd.setOptions(options)
<p>设置 taggd 选项配置</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | <p>选项配置(options.md)</p> |

### taggd.addTag(tag)
<p>添加一个 tag</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| tag | <code>Taggd.Tag</code> | <p>tag 实例</p> |

### taggd.getTag(index) ⇒ <code>Taggd.Tag</code>
<p>根据索引获取一个 tag</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: <code>Taggd.Tag</code> - <p>当前获取到的 tag</p>  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | <p>tag 所在集合的索引</p> |

### taggd.deleteTag(index)
<p>根据索引删除一个 tag</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | <p>tag 所在集合的索引</p> |

### taggd.setTags(tags)
<p>设置所有 tag，它会先清空现有的 tag</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| tags | <code>Array.&lt;Taggd.Tag&gt;</code> | <p>tag 数组</p> |

### taggd.addTags(tags)
<p>添加多个 tag</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| tags | <code>Array.&lt;Taggd.Tag&gt;</code> | <p>tag 数组</p> |

### taggd.getTags()
<p>获取所有的 tag</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: <code>Array.&lt;Taggd.Tag&gt;</code> - <p>当前实例的所有 tag 集合</p>  

### taggd.deleteTags()
<p>删除所有的 tag</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

### taggd.map(callback)
<p>遍历所有 tag</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <p>回调处理函数</p> |

### taggd.destroy()
<p>销毁实例</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

### taggd.enableEditorMode()
<p>启用编辑模式，可缩放，移动，添加事件触发</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

### taggd.disableEditorMode()
<p>禁用编辑模式</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  
