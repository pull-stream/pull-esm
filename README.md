# pull-esm

This is an ES module build of [pull-stream](https://github.com/pull-stream/pull-stream)


## Usage

To use in a bundle-free browser setup:

```bash
npm i -D pull-esm
mkdir vendor
cp node_modules/pull-esm/dist/index.js vendor/pull-stream.js
```

Then you can import it in your js like so:

```js
import pull from './vendor/pull-stream.js'
```

If you are using Node you can probably just 

```js
import pull from 'pull-esm'
```

