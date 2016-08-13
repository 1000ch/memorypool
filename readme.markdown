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

let numbers = arrayPool.allocate();
let strings = arrayPool.allocate();
arrayPool.free(numbers);
arrayPool.free(strings);

// reuse Array instance from object pool
let bools = arrayPool.allocate();
```

## License

MIT: http://1000ch.mit-license.org
