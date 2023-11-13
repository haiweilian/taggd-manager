# Taggd

### new Taggd(image, [options], [data])
<p>创建一个 Taggd 新实例</p>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| image | <code>HTMLElement</code> |  | <p>图片元素</p> |
| [options] | <code>Object</code> | <code>{}</code> | <p>选项配置</p> |
| [data] | <code>Array</code> | <code>[]</code> | <p>tags 实例</p> |

<a name="Taggd+on"></a>

### taggd.on(eventName, handler) ⇒ [<code>Taggd</code>](#Taggd)
<p>订阅事件</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>事件名称</p> |
| handler | <code>function</code> | <p>事件回调</p> |

<a name="Taggd+off"></a>

### taggd.off(eventName, handler) ⇒ [<code>Taggd</code>](#Taggd)
<p>取消订阅事件</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>事件名称</p> |
| handler | <code>function</code> | <p>事件回调</p> |

<a name="Taggd+once"></a>

### taggd.once(eventName, handler) ⇒ [<code>Taggd</code>](#Taggd)
<p>触发一次订阅后，立即取消订阅</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>事件名称</p> |
| handler | <code>function</code> | <p>事件回调</p> |

<a name="Taggd+setOptions"></a>

### taggd.setOptions(options) ⇒ [<code>Taggd</code>](#Taggd)
<p>设置 taggd 选项配置</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | <p>选项配置(options.md)</p> |

<a name="Taggd+addTag"></a>

### taggd.addTag(tag) ⇒ [<code>Taggd</code>](#Taggd)
<p>添加一个 tag</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| tag | <code>Taggd.Tag</code> | <p>tag 实例</p> |

<a name="Taggd+getTag"></a>

### taggd.getTag(index) ⇒ <code>Taggd.Tag</code>
<p>根据索引获取一个 tag</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: <code>Taggd.Tag</code> - <p>当前获取到的 tag</p>  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | <p>tag 所在集合的索引</p> |

<a name="Taggd+deleteTag"></a>

### taggd.deleteTag(index) ⇒ [<code>Taggd</code>](#Taggd)
<p>根据索引删除一个 tag</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | <p>tag 所在集合的索引</p> |

<a name="Taggd+setTags"></a>

### taggd.setTags(tags) ⇒ [<code>Taggd</code>](#Taggd)
<p>设置所有 tag，它会先清空现有的 tag</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| tags | <code>Array.&lt;Taggd.Tag&gt;</code> | <p>tag 数组</p> |

<a name="Taggd+addTags"></a>

### taggd.addTags(tags) ⇒ [<code>Taggd</code>](#Taggd)
<p>添加多个 tag</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| tags | <code>Array.&lt;Taggd.Tag&gt;</code> | <p>tag 数组</p> |

<a name="Taggd+getTags"></a>

### taggd.getTags() ⇒ <code>Array.&lt;Taggd.Tag&gt;</code>
<p>获取所有的 tag</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: <code>Array.&lt;Taggd.Tag&gt;</code> - <p>当前实例的所有 tag 集合</p>  
<a name="Taggd+deleteTags"></a>

### taggd.deleteTags() ⇒ [<code>Taggd</code>](#Taggd)
<p>删除所有的 tag</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  
<a name="Taggd+map"></a>

### taggd.map(callback) ⇒ [<code>Taggd</code>](#Taggd)
<p>遍历所有 tag</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <p>回调处理函数</p> |

<a name="Taggd+destroy"></a>

### taggd.destroy() ⇒ [<code>Taggd</code>](#Taggd)
<p>销毁实例</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  
<a name="Taggd+enableEditorMode"></a>

### taggd.enableEditorMode() ⇒ [<code>Taggd</code>](#Taggd)
<p>启用编辑模式，可缩放，移动，添加事件触发</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  
<a name="Taggd+disableEditorMode"></a>

### taggd.disableEditorMode() ⇒ [<code>Taggd</code>](#Taggd)
<p>禁用编辑模式</p>

**Kind**: instance method of [<code>Taggd</code>](#Taggd)  
**Returns**: [<code>Taggd</code>](#Taggd) - <p>当前 Taggd 实例</p>  
