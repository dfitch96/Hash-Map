const {HashMap} = require('./hashmap');

let hashMap = new HashMap();

const key = "abca";
const hashCode = hashMap.hash(key);
hashMap.set(key, 5);
hashMap.buckets[hashCode - 1].contains(key);

// const key1 = "Rama";
// const key2 = "Sita";
// hashMap.set(key1, 1);
// hashMap.set(key2, 5);
// console.log(hashMap.get(key1));
// console.log(hashMap.get(key2));
