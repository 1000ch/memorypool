const test = require('tape');
const MemoryPool = require('.');

test('MemoryPool is a class', t => {
  t.plan(3);
  t.ok(typeof MemoryPool === 'function');
  t.ok(new MemoryPool(Array) instanceof MemoryPool);
  t.throws(MemoryPool);
});

test('MemoryPool instance behaves memory pool', t => {
  t.plan(7);

  let arrayPool = new MemoryPool(Array);
  let array1 = arrayPool.allocate();
  let array2 = arrayPool.allocate();
  t.ok(array1 instanceof Array);
  t.ok(array2 instanceof Array);
  t.ok(arrayPool.size === 0);

  arrayPool.free(array1);
  arrayPool.free(array2);
  t.ok(arrayPool.size === 2);

  let array = arrayPool.allocate();
  t.ok(array instanceof Array);
  t.ok(arrayPool.size === 1);

  arrayPool.collect();
  t.ok(arrayPool.size === 0);
});
