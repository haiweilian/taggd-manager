![shields](https://img.shields.io/npm/l/taggd-manager)
![shields](https://img.shields.io/npm/v/taggd-manager)
![shields](https://img.shields.io/npm/dm/taggd-manager)

![Example](https://github.com/haiweilian/taggd-manager/raw/master/docs/example.gif)

## taggd-manager

[English](https://github.com/haiweilian/taggd-manager/blob/master/README.md)

[中文文档](https://github.com/haiweilian/taggd-manager/blob/master/READMECN.md)

`taggd-manager` 是一个图片标记管理工具，支持缩放、移动和灵活的自定义。

它的原始创意来自 [timseverien/taggd](https://github.com/timseverien/taggd)，原作者不维护了此项目。故新建了一个项目扩展，增加了缩放、移动的功能和更多的事件回调。

## Installation

* [Download the latest release](https://github.com/haiweilian/taggd-manager/archive/master.zip)
* npm: `npm install taggd-manager`

## Documentation

* [Demo](http://haiweilian.github.io/taggd-manager/tests/manual/basic.html)
* [Options](https://github.com/haiweilian/taggd-manager/blob/master/docs/cn/options.md)
* [Events](https://github.com/haiweilian/taggd-manager/blob/master/docs/cn/events.md)
* [Methods Taggd](https://github.com/haiweilian/taggd-manager/blob/master/docs/cn/methods-taggd.md)
* [Methods Tag](https://github.com/haiweilian/taggd-manager/blob/master/docs/cn/methods-tag.md)

## Usage

您需要引入 `css` 和 `js` 文件，两个文件都在 `dist` 目录中。

样式表只有所需依赖样式，如果要添加主题，请重新覆盖。

```html
<link rel="stylesheet" href="/path/to/taggd-manager/dist/taggd.css">
```

```html
<script src="/path/to/taggd-manager/dist/taggd.umd.js"></script>
```

如果使用模块导入。

```js
import Taggd from 'taggd-manager';
```

最后，您可以初始化 `taggd`。

```js
const image = document.getElementById('my-image');
const options = {};
const tags = [];

const taggd = new Taggd(image, options, tags);
```

## Issue

If you have a better suggestion, please [create an issue](https://github.com/haiweilian/taggd-manager/issues)

## License

The code is released under [the MIT license](https://github.com/haiweilian/taggd-manager/blob/master/LICENSE)
