<a name="Tag"></a>

## Tag
**Kind**: global class  

* [Tag](#Tag)
    * [new Tag(position, text, [buttonAttributes], [popupAttributes])](#new_Tag_new)
    * _instance_
        * [.on(eventName, handler)](#Tag+on) ⇒ <code>Taggd.Tag</code>
        * [.off(eventName, handler)](#Tag+off) ⇒ <code>Taggd.Tag</code>
        * [.once(eventName, handler)](#Tag+once) ⇒ <code>Taggd.Tag</code>
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
<p>创建一个 Tag 新实例</p>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| position | <code>Object</code> |  | <p>tag 坐标</p> |
| text | <code>String</code> \| <code>function</code> |  | <p>tag 内容</p> |
| [buttonAttributes] | <code>Object</code> | <code>{}</code> | <p>button 自定义属性</p> |
| [popupAttributes] | <code>Object</code> | <code>{}</code> | <p>popup 自定义属性</p> |

<a name="Tag+on"></a>

### tag.on(eventName, handler) ⇒ <code>Taggd.Tag</code>
<p>订阅事件</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>事件名称</p> |
| handler | <code>function</code> | <p>事件回调</p> |

<a name="Tag+off"></a>

### tag.off(eventName, handler) ⇒ <code>Taggd.Tag</code>
<p>取消订阅事件</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>事件名称</p> |
| handler | <code>function</code> | <p>事件回调</p> |

<a name="Tag+once"></a>

### tag.once(eventName, handler) ⇒ <code>Taggd.Tag</code>
<p>触发一次订阅后，立即取消订阅</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | <p>事件名称</p> |
| handler | <code>function</code> | <p>事件回调</p> |

<a name="Tag+isHidden"></a>

### tag.isHidden() ⇒ <code>Boolean</code>
<p>当前 tag 是否隐藏</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Boolean</code> - <p>true/false</p>  
<a name="Tag+show"></a>

### tag.show() ⇒ <code>Taggd.Tag</code>
<p>显示 tag 内容</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  
<a name="Tag+hide"></a>

### tag.hide() ⇒ <code>Taggd.Tag</code>
<p>隐藏 tag 内容</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  
<a name="Tag+setText"></a>

### tag.setText(text) ⇒ <code>Taggd.Tag</code>
<p>设置 tag 内容</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> \| <code>function</code> | <p>tag 内容，如果是一个函数使用当前函数执行的结果</p> |

<a name="Tag+setPosition"></a>

### tag.setPosition(x, y) ⇒ <code>Taggd.Tag</code>
<p>设置 tag 坐标位置</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | <p>x 坐标</p> |
| y | <code>Number</code> | <p>y 坐标</p> |

<a name="Tag+setButtonAttributes"></a>

### tag.setButtonAttributes(atttributes) ⇒ <code>Taggd.Tag</code>
<p>设置 button 属性</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| atttributes | <code>Object</code> | <p>= {} - 属性信息</p> |

<a name="Tag+setPopupAttributes"></a>

### tag.setPopupAttributes(atttributes) ⇒ <code>Taggd.Tag</code>
<p>设置 popup 属性</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| atttributes | <code>Object</code> | <p>= {} - 属性信息</p> |

<a name="Tag+enableEditorMode"></a>

### tag.enableEditorMode() ⇒ <code>Taggd.Tag</code>
<p>启用编辑模式，可移动、切换状态</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  
<a name="Tag+disableEditorMode"></a>

### tag.disableEditorMode() ⇒ <code>Taggd.Tag</code>
<p>禁用编辑模式</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - <p>当前 Tag 实例</p>  
<a name="Tag+toJSON"></a>

### tag.toJSON() ⇒ <code>Object</code>
<p>获取 tag 信息</p>

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Object</code> - <p>JSON 对象</p>  
<a name="Tag.setElementAttributes"></a>

### Tag.setElementAttributes(element, [attributes]) ⇒ <code>DomNode</code>
<p>静态方法-设置元素属性</p>

**Kind**: static method of [<code>Tag</code>](#Tag)  
**Returns**: <code>DomNode</code> - <p>The original element</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>DomNode</code> |  | <p>元素</p> |
| [attributes] | <code>Object</code> | <code>{}</code> | <p>属性对象</p> |

<a name="Tag.getPositionStyle"></a>

### Tag.getPositionStyle(x, y) ⇒ <code>Object</code>
<p>Get the position style</p>

**Kind**: static method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Object</code> - <p>The style</p>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | <p>The tag’s x-coordinate</p> |
| y | <code>Number</code> | <p>The tag’s y-coordinate</p> |

<a name="Tag.createFromObject"></a>

### Tag.createFromObject(object) ⇒ [<code>Tag</code>](#Tag)
<p>静态方法-对象的方式创建 tag</p>

**Kind**: static method of [<code>Tag</code>](#Tag)  
**Returns**: [<code>Tag</code>](#Tag) - <p>创建的 Tag 实例</p>  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | <p>new Tag 对象方式的参数</p> |
