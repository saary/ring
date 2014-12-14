var Ring = require('./ring.js');
var ring = new Ring(4);

for (var i=0; i<14; i++) {
  ring.push(i);
}

console.log(ring.toArray());

var o;
while (o = ring.dequeue()) {
  console.log(o);
}

console.log(ring.isEmpty);

ring.push(1,2,3,4,5,6);

console.log(ring.toArray().join('\n'));
