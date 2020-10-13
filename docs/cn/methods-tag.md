<a name="Tag"></a>

## Tag
**Kind**: global class  

* [Tag](#Tag)
    * [new Tag(position, text, [buttonAttributes], [popupAttributes])](#new_Tag_new)
    * _instance_
        * [.on(eventName, handler)](#Tag+on) ⇒ <code>Taggd</code>
        * [.off(eventName, handler)](#Tag+off) ⇒ <code>Taggd</code>
        * [.once(eventName, handler)](#Tag+once) ⇒ <code>Taggd</code>
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
创建一个 Tag 新实例


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| position | <code>Object</code> |  | tag 坐标 |
| text | <code>String</code> \| <code>function</code> |  | tag 内容 |
| [buttonAttributes] | <code>Object</code> | <code>{}</code> | button 自定义属性 |
| [popupAttributes] | <code>Object</code> | <code>{}</code> | popup 自定义属性 |

<a name="Tag+on"></a>

### tag.on(eventName, handler) ⇒ <code>Taggd</code>
订阅事件

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd</code> - 当前 Taggd 实例  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | 事件名称 |
| handler | <code>function</code> | 事件回调 |

<a name="Tag+off"></a>

### tag.off(eventName, handler) ⇒ <code>Taggd</code>
取消订阅事件

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd</code> - 当前 Taggd 实例  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | 事件名称 |
| handler | <code>function</code> | 事件回调 |

<a name="Tag+once"></a>

### tag.once(eventName, handler) ⇒ <code>Taggd</code>
触发一次订阅后，以及取消订阅

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd</code> - 当前 Taggd 实例  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>String</code> | 事件名称 |
| handler | <code>function</code> | 事件回调 |

<a name="Tag+isHidden"></a>

### tag.isHidden() ⇒ <code>Boolean</code>
当前 tag 是否隐藏

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Boolean</code> - false/true  
<a name="Tag+show"></a>

### tag.show() ⇒ <code>Taggd.Tag</code>
显示 tag 内容

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - 当前 Tag 实例  
<a name="Tag+hide"></a>

### tag.hide() ⇒ <code>Taggd.Tag</code>
隐藏 tag 内容

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - 当前 Tag 实例  
<a name="Tag+setText"></a>

### tag.setText(text) ⇒ <code>Taggd.Tag</code>
设置 tag 内容

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - 当前 Tag 实例  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> \| <code>function</code> | tag 内容，如果是一个函数使用当前函数执行的结果 |

<a name="Tag+setPosition"></a>

### tag.setPosition(x, y) ⇒ <code>Taggd.Tag</code>
设置 tag 坐标位置

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - 当前 Tag 实例  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | x 坐标 |
| y | <code>Number</code> | y 坐标 |

<a name="Tag+setButtonAttributes"></a>

### tag.setButtonAttributes(atttributes) ⇒ <code>Taggd.Tag</code>
设置 button 属性

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - 当前 tag 实例  

| Param | Type | Description |
| --- | --- | --- |
| atttributes | <code>Object</code> | = {} - button 属性 |

<a name="Tag+setPopupAttributes"></a>

### tag.setPopupAttributes(atttributes) ⇒ <code>Taggd.Tag</code>
设置 popup 属性

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - 当前 tag 实例  

| Param | Type | Description |
| --- | --- | --- |
| atttributes | <code>Object</code> | = {} - popup 属性 |

<a name="Tag+enableEditorMode"></a>

### tag.enableEditorMode() ⇒ <code>Taggd.Tag</code>
启用编辑模式，可移动

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - 当前 tag 实例  
<a name="Tag+disableEditorMode"></a>

### tag.disableEditorMode() ⇒ <code>Taggd.Tag</code>
禁用编辑模式

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Taggd.Tag</code> - 当前 tag 实例  
<a name="Tag+toJSON"></a>

### tag.toJSON() ⇒ <code>Object</code>
获取 tag 信息返回一个与 Taggd.createFromObject 格式对应的对象。
包含坐标信息、button属性、popup属性。

**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Object</code> - JSON 对象
<a name="Tag.setElementAttributes"></a>

### Tag.setElementAttributes(element, [attributes]) ⇒ <code>DomNode</code>
静态方法-设置元素属性

**Kind**: static method of [<code>Tag</code>](#Tag)  
**Returns**: <code>DomNode</code> - The original element  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>DomNode</code> |  | 元素 |
| [attributes] | <code>Object</code> | <code>{}</code> | 属性对象 |

<a name="Tag.getPositionStyle"></a>

### Tag.getPositionStyle(x, y) ⇒ <code>Object</code>
静态方法-获取相对定位值

**Kind**: static method of [<code>Tag</code>](#Tag)  
**Returns**: <code>Object</code> - The style  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | x 坐标 |
| y | <code>Number</code> | y 坐标 |

<a name="Tag.createFromObject"></a>

### Tag.createFromObject(object) ⇒ [<code>Tag</code>](#Tag)
静态方法-对象的方式创建 tag

**Kind**: static method of [<code>Tag</code>](#Tag)  
**Returns**: [<code>Tag</code>](#Tag) - 创建 Tag 实例  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | new Tag 对象方式的参数 |

