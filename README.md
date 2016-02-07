# forceraw-loader

This is a webpack loader that will load files as strings without them being
preprocessed by webpack beforehand, as is.

```js
require('forceraw?path=filename!.')
# or
import content from 'forceraw?path=filename!.'
```

It also supports globbing and will import multiple files as an object:

```js
import files from 'forceraw=files/**!.'
```
