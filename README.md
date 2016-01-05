# zap-base-dom-data

just translating (and testing) some old code to ES6, nothing to see here ;-)

## Install
```
$ npm install zap-base-dom-data
```

## Usage
```js
import {
    store,
    retrieve,
    clear,
} from 'zap-base-dom-data';
```

## store
```js
store(dataElement, 'demo', 'test data');
```

## retrieve
```js
var data = retrieve(dataElement, 'demo');
```

## clear
```js
clear(dataElement, 'demo');
```
