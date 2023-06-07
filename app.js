import LinkedList from "./linkedlist.js";

const ll = new LinkedList();

console.log(ll.size());
ll.append("A1");
console.log(ll.size());
ll.prepend("A2");
console.log(ll.size());
console.log(ll.toString());
console.log();

ll.pop();
console.log(ll.toString());
ll.append("A3");
ll.append("A4");
ll.prepend("A5");
console.log(ll.toString());
console.log();

console.log(ll.contains("A4"));
console.log(ll.contains("A2"));
console.log(ll.contains("A6"));
console.log(ll.contains("A5"));
console.log(ll.contains(null));
console.log(ll.find("A3"));
console.log(ll.find("A5"));
console.log(ll.find("A6"));
console.log();

console.log(ll.toString());
ll.insertAt("NEW 2", 2);
console.log(ll.toString());
ll.insertAt("NEW 0", 0);
console.log(ll.toString());
ll.insertAt("NEW oob", 10);
console.log(ll.toString());
ll.insertAt("NEW oob", -10);
console.log(ll.toString());
console.log();

console.log('Remove at 0: ');
ll.removeAt(0);
console.log(ll.toString());
console.log('Remove at 1: ');
ll.removeAt(1);
console.log(ll.toString());
console.log('Remove at 3: ');
ll.removeAt(3);
console.log(ll.toString());
console.log('Remove at 4: ');
ll.removeAt(4);
console.log(ll.toString());