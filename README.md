ring.js
====

A simple ring list / buffer for node.js

### installation
`npm install ringjs`

### usage
```javascript

var Ring = require('ringjs');
var ring = new Ring(4); // defines a ring of size 4

// push 14 numbers to list (only the last 4 will remain)
for (var i=0; i<14; i++) {
  ring.push(i);
}

console.log(ring.toArray()); // [ 10, 11, 12, 13 ]

var o;
while (o = ring.dequeue()) {
  console.log(o);
}
// Output:
// 10
// 11
// 12
// 13

console.log(ring.isEmpty);
// Output:
// true

ring.push(1,2,3,4,5,6); // add new numbers to the ring

console.log(ring.toArray().join('\n')); // 3\n4\n5\n6
```

### license
MIT
