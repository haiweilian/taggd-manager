# Taggd.Tag

### new Tag(position, text, [buttonAttributes], [popupAttributes])

创建一个 Tag 新实例

| Param              | Type               | Default | Description       |
| ------------------ | ------------------ | ------- | ----------------- |
| position           | Object             |         | tag 坐标          |
| text               | String \| function |         | tag 内容          |
| [buttonAttributes] | Object             | {}      | button 自定义属性 |
| [popupAttributes]  | Object             | {}      | popup 自定义属性  |

### tag.on(eventName, handler)

订阅事件

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - 当前 Tag 实例

| Param     | Type     | Description |
| --------- | -------- | ----------- |
| eventName | String   | 事件名称    |
| handler   | function | 事件回调    |

### tag.off(eventName, handler)

取消订阅事件

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - 当前 Tag 实例

| Param     | Type     | Description |
| --------- | -------- | ----------- |
| eventName | String   | 事件名称    |
| handler   | function | 事件回调    |

### tag.once(eventName, handler)

触发一次订阅后，立即取消订阅

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - 当前 Tag 实例

| Param     | Type     | Description |
| --------- | -------- | ----------- |
| eventName | String   | 事件名称    |
| handler   | function | 事件回调    |

### tag.isHidden()

当前 tag 是否隐藏

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Boolean - true/false

### tag.show()

显示 tag 内容

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - 当前 Tag 实例

### tag.hide()

隐藏 tag 内容

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - 当前 Tag 实例

### tag.setText(text)

设置 tag 内容

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - 当前 Tag 实例

| Param | Type               | Description                                    |
| ----- | ------------------ | ---------------------------------------------- |
| text  | String \| function | tag 内容，如果是一个函数使用当前函数执行的结果 |

### tag.setPosition(x, y)

设置 tag 坐标位置

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - 当前 Tag 实例

| Param | Type   | Description |
| ----- | ------ | ----------- |
| x     | Number | x 坐标      |
| y     | Number | y 坐标      |

### tag.setButtonAttributes(atttributes)

设置 button 属性

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - 当前 Tag 实例

| Param       | Type   | Description     |
| ----------- | ------ | --------------- |
| atttributes | Object | = {} - 属性信息 |

### tag.setPopupAttributes(atttributes)

设置 popup 属性

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - 当前 Tag 实例

| Param       | Type   | Description     |
| ----------- | ------ | --------------- |
| atttributes | Object | = {} - 属性信息 |

### tag.enableEditorMode()

启用编辑模式，可移动、切换状态

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - 当前 Tag 实例

### tag.disableEditorMode()

禁用编辑模式

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Taggd.Tag - 当前 Tag 实例

### tag.toJSON()

获取 tag 信息

**Kind**: instance method of [Tag](#Tag)  
**Returns**: Object - JSON 对象

### Tag.setElementAttributes(element, [attributes])

静态方法-设置元素属性

**Kind**: static method of [Tag](#Tag)  
**Returns**: DomNode - The original element

| Param        | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| element      | DomNode |         | 元素        |
| [attributes] | Object  | {}      | 属性对象    |

### Tag.createFromObject(object)

静态方法-对象的方式创建 tag

**Kind**: static method of [Tag](#Tag)  
**Returns**: [Tag](#Tag) - 创建的 Tag 实例

| Param  | Type   | Description            |
| ------ | ------ | ---------------------- |
| object | Object | new Tag 对象方式的参数 |
