# MemoryPool

JavaScript Memory Pool implementation

[![Build Status](https://travis-ci.org/1000ch/memorypool.svg?branch=master)](https://travis-ci.org/1000ch/memorypool)
[![NPM version](https://badge.fury.io/js/memorypool.svg)](http://badge.fury.io/js/memorypool)
[![Dependency Status](https://david-dm.org/1000ch/memorypool.svg)](https://david-dm.org/1000ch/memorypool)
[![devDependency Status](https://david-dm.org/1000ch/memorypool/dev-status.svg)](https://david-dm.org/1000ch/memorypool#info=devDependencies)

## Install

```bash
$ npm install memorypool
```

## Usage

```javascript
const MemoryPool = require('memorypool');
const arrayPool = new MemoryPool(Array);
const stringPool = new MemoryPool(String);

let array1 = arrayPool.allocate();
let array2 = arrayPool.allocate();
arrayPool.free(array1);
arrayPool.free(array2);
let string1 = stringPool.allocate();
stringPool.free(string1);

// reuse Array instance from array pool
let array3 = arrayPool.allocate();
// reuse String instance from string pool
let string2 = stringPool.allocate();
```

## License

MIT: http://1000ch.mit-license.org
