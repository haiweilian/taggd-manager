# Intro

`taggd-manager` Is an image tag management tool that supports zooming, moving, and flexible customization.

## Installation

- [Download the latest release](https://github.com/haiweilian/taggd-manager/archive/master.zip)
- npm: `npm install taggd-manager`

## Usage

You need to bring in the `css` and `js` files, both of which are in the `dist` directory.

The style sheet has only the required dependency style, if you want to add a theme, re-override it.

```html
<link rel="stylesheet" href="/path/to/taggd-manager/dist/taggd.css" />
```

```html
<script src="/path/to/taggd-manager/dist/taggd.umd.js"></script>
```

If you use a module import.

```js
import Taggd from 'taggd-manager'
import 'taggd-manager/dist/taggd.css'
```

Finally, you can initialize `taggd`.

```js
const image = document.getElementById('my-image')
const options = {}
const tags = []

const taggd = new Taggd(image, options, tags)
```
