# collabs-bundle #

a Collabs bundle that can be used directly in the browser (e.g., for no-build environments like REPLs or similar)

[Collabs](https://github.com/composablesys/collabs) has been designed to be used with a bundler like [Rollup](https://rollupjs.org/), [webpack](https://webpack.js.org/) or [Vite](https://vitejs.dev/).

If you want to use Collabs in a "no-build environment" (such as a browser-based REPL), you may load the `collabs-bundle` from this repository using a simple `<script/>` element, wait for the `collabs` global to become available (because it has to be loaded as a JavaScript module) and then use it in your code:

```html
<script type="module" src="https://rozek.github.io/collabs-bundle/dist/collabs-bundle.js"></script>

<script>
  if (window.collabs == null) {
    document.addEventListener('collabs',runApplication)
  } else {
    runApplication()
  }

  function runApplication () {
    const {
      collabs, 
      IndexedDBDocStore, LocalStorageDocStore,
      TabSyncNetwork, WebSocketNetwork,
    } = window.collabs

// ....insert your collabs code here
  }
</script>
```

`collabs-bundle` creates a global called `collabs` with the following contents:

* `collabs` - imported from `@collabs/collabs`
* `IndexedDBDocStore` - imported from `@collabs/indexeddb`
* `LocalStorageDocStore` - imported from `@collabs/local-storage`
* `TabSyncNetwork` - imported from `@collabs/tab-sync`
* `WebSocketNetwork` - imported from `@collabs/ws-client`

As a consequence, instead of

`  import * as collabs from "@collabs/collabs"`

you now write

`  const { collabs } = window.collabs`

or similar - as soon as `collabs` has become available.

## Build Instructions ##

You may easily build this package yourself.

Just install [NPM](https://docs.npmjs.com/) according to the instructions for your platform and follow these steps:

1. either clone this repository using [git](https://git-scm.com/) or [download a ZIP archive](https://github.com/rozek/collabs-bundle/archive/refs/heads/main.zip) with its contents to your disk and unpack it there 
2. open a shell and navigate to the root directory of this repository
3. run `npm install` in order to install the complete build environment
4. execute `npm run build` to create a new build

## License ##

[MIT License](LICENSE.md)
