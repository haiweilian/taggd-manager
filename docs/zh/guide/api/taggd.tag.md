# Taggd.Tag

### new Tag(position, text, [buttonAttributes], [popupAttributes])
<p>创建一个 Tag 新实例</p>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| position | <code>Object</code> |  | <p>tag 坐标</p> |
| text | <code>String</code> \| <code>function</code> |  | <p>tag 内容</p> |
| [buttonAttributes] | <code>Object</code> | <code>{}</code> | <p>button 自定义属性</p> |
| [popupAttributes] | <code>Object</code> | <code>{}</code> | <p>popup 自定义属性</p> |

### tag.on(eventName, handler)
<p>订阅事件</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>事件名称</p> |
| handler | <code>function</code> | <p>事件回调</p> |

### tag.off(eventName, handler)
<p>取消订阅事件</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>事件名称</p> |
| handler | <code>function</code> | <p>事件回调</p> |

### tag.once(eventName, handler)
<p>触发一次订阅后，立即取消订阅</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>事件名称</p> |
| handler | <code>function</code> | <p>事件回调</p> |

### tag.isHidden()
<p>当前 tag 是否隐藏</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Boolean</code> - <p>true/false</p>  

### tag.show()
<p>显示 tag 内容</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  

### tag.hide()
<p>隐藏 tag 内容</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  

### tag.setText(text)
<p>设置 tag 内容</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> \| <code>function</code> | <p>tag 内容，如果是一个函数使用当前函数执行的结果</p> |

### tag.setPosition(x, y)
<p>设置 tag 坐标位置</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | <p>x 坐标</p> |
| y | <code>Number</code> | <p>y 坐标</p> |

### tag.setButtonAttributes(atttributes)
<p>设置 button 属性</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| atttributes | <code>Object</code> | <p>= {} - 属性信息</p> |

### tag.setPopupAttributes(atttributes)
<p>设置 popup 属性</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| atttributes | <code>Object</code> | <p>= {} - 属性信息</p> |

### tag.enableEditorMode()
<p>启用编辑模式，可移动、切换状态</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  

### tag.disableEditorMode()
<p>禁用编辑模式</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  

### tag.toJSON()
<p>获取 tag 信息</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Object</code> - <p>JSON 对象</p>  

### Tag.setElementAttributes(element, [attributes])
<p>静态方法-设置元素属性</p>

**Kind**: static method of [<code>Tag</code>](#Tag)  
**Returns**: <code>DomNode</code> - <p>The original element</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>DomNode</code> |  | <p>元素</p> |
| [attributes] | <code>Object</code> | <code>{}</code> | <p>属性对象</p> |

### Tag.getPositionStyle(x, y)
<p>Get the position style</p>

**Kind**: static method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Object</code> - <p>The style</p>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | <p>The tag’s x-coordinate</p> |
| y | <code>Number</code> | <p>The tag’s y-coordinate</p> |

### Tag.createFromObject(object)
<p>静态方法-对象的方式创建 tag</p>

**Kind**: static method of [<code>Tag</code>](#Tag)  
**Returns**: [<code>Tag</code>](#Tag) - <p>创建的 Tag 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | <p>new Tag 对象方式的参数</p> |
