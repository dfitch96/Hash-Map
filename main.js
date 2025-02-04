const {HashMap} = require('./hashmap');

let hashMap = new HashMap();

const key = "abca";
const hashCode = hashMap.hash(key);
hashMap.set(key, 5);
console.log(hashMap.get(key));