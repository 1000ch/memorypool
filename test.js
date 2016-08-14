const test = require('tape');
const MemoryPool = require('.');

test('MemoryPool', t => {
  t.plan(3);
  t.ok(typeof MemoryPool === 'function');
  t.ok(new MemoryPool(Array) instanceof MemoryPool);
  t.throws(MemoryPool);
});

test('Instance#allocate()', t => {
  t.plan(3);

  let arrayPool = new MemoryPool(Array);
  let array1 = arrayPool.allocate();
  let array2 = arrayPool.allocate();
  t.ok(array1 instanceof Array);
  t.ok(array2 instanceof Array);
  t.ok(arrayPool.size === 0);
});

test('Instance#free()', t => {
  t.plan(3);

  let arrayPool = new MemoryPool(Array);
  let array1 = arrayPool.allocate();
  let array2 = arrayPool.allocate();
  arrayPool.free(array1);
  arrayPool.free(array2);
  t.ok(arrayPool.size === 2);

  let array = arrayPool.allocate();
  t.ok(array instanceof Array);
  t.ok(arrayPool.size === 1);
});

test('Instance#collect()', t => {
  t.plan(2);

  let arrayPool = new MemoryPool(Array);
  let array1 = arrayPool.allocate();
  let array2 = arrayPool.allocate();
  let array3 = arrayPool.allocate();
  arrayPool.free(array1);
  arrayPool.free(array2);
  arrayPool.free(array3);
  t.ok(arrayPool.size === 3);

  arrayPool.collect();
  t.ok(arrayPool.size === 0);
});
