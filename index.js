class MemoryPool {
  constructor(Class) {
    if (Class === undefined) {
      throw new Error('No arguments');
    }

    if (typeof Class !== 'function') {
      throw new Error(`${Class} is not a function`);
    }

    this.Class = Class;
    this.pool = [];
  }

  get size() {
    return this.pool.length;
  }

  allocate() {
    if (this.pool.length === 0) {
      return new this.Class();
    } else {
      return this.pool.pop();
    }
  }

  free(object) {
    if (object instanceof this.Class) {
      // add an object into the pool
      this.pool.push(object);
    }
  }

  collect() {
    // release pooled objects
    this.pool = [];
  }
}

module.exports = MemoryPool;
