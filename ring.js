var Ring = function(size) {
  if (!(this instanceof Ring)) {
    return new Ring(size);
  }

  var _list = new Array(size);
  var _start = 0;
  var _count = 0;
  var self = this;

  this.__defineGetter__('isFull', function() {
    return _count === size;
  });

  this.__defineGetter__('isEmpty', function() {
    return _count === 0;
  });

  this.__defineGetter__('count', function() {
    return _count;
  });

  this.__defineGetter__('size', function() {
    return size;
  });

  function push(item) {
    var end = (_start + _count) % size;
    _list[end] = item;
    if (_count === size) {
      _start = (_start + 1) % size; /* full, overwrite */
    }
    else {
      ++_count;
    }
  }

  this.push = function() {
    for(var i=0; i<arguments.length; i++) {
      push(arguments[i]);
    }
  };

  this.dequeue = function() {
    if (this.isEmpty) return undefined;

    var item = _list[_start];
    _list[_start] = undefined;
    _start = (_start + 1) % size;
    --_count;

    return item;
  }

  this.forEach = function(cb) {
    if (!cb) return;

    for(var i=_start, count=_count; count>0; i=(i+1) % size, --count) {
      cb(_list[i]);
    }
  };

  this.toArray = function() {
    var arr = new Array(_count);
    var i=0;
    this.forEach(function(item) {
      arr[i++] = item;
    });

    return arr;
  }
}

module.exports = Ring;