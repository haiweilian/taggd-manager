# 介绍

`taggd-manager` 是一个图片标记管理工具，支持缩放、移动和灵活的自定义。

## 下载

- [Download the latest release](https://github.com/haiweilian/taggd-manager/archive/master.zip)
- npm: `npm install taggd-manager`

## 使用

您需要引入 `css` 和 `js` 文件，两个文件都在 `dist` 目录中。

样式表只有所需依赖样式，如果要添加主题，请重新覆盖。

```html
<link rel="stylesheet" href="/path/to/taggd-manager/dist/taggd.css" />
```

```html
<script src="/path/to/taggd-manager/dist/taggd.umd.js"></script>
```

如果使用模块导入。

```js
import Taggd from 'taggd-manager'
import 'taggd-manager/dist/taggd.css'
```

最后，您可以初始化 `taggd`。

```js
const image = document.getElementById('my-image')
const options = {}
const tags = []

const taggd = new Taggd(image, options, tags)
```
