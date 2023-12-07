![shields](https://img.shields.io/npm/l/taggd-manager)
![shields](https://img.shields.io/npm/v/taggd-manager)
![shields](https://img.shields.io/npm/dm/taggd-manager)

![Example](https://github.com/haiweilian/taggd-manager/raw/master/docs/public/example.gif)

## taggd-manager

[English](https://haiweilian.github.io/taggd-manager/guide/introduction.html)

[中文文档](https://haiweilian.github.io/taggd-manager/zh/guide/introduction.html)

`taggd-manager` Is an image tag management tool that supports zooming, moving, and flexible customization.

The original idea of it comes from [timseverien/taggd](https://github.com/timseverien/taggd), The original author did not maintain this project. So a new project extension has been created, adding zoom, move and more event callbacks.

## Installation

* [Download the latest release](https://github.com/haiweilian/taggd-manager/archive/master.zip)
* npm: `npm install taggd-manager`

## Usage

You need to bring in the `css` and `js` files, both of which are in the `dist` directory.

The style sheet has only the required dependency style, if you want to add a theme, re-override it.

```html
<link rel="stylesheet" href="/path/to/taggd-manager/dist/taggd.css">
```

```html
<script src="/path/to/taggd-manager/dist/taggd.umd.js"></script>
```

If you use a module import.

```js
import Taggd from 'taggd-manager';
import 'taggd-manager/dist/taggd.css';
```

Finally, you can initialize `taggd`.

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
