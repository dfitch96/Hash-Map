const {HashMap} = require('./hashmap');

let hashMap = new HashMap();

const key1 = "Rama";
const key2 = "Sita";
const key3 = "Dylan";
const key4 = "Joe";

const keys = ["Rama", "Sita", "Dylan", "Joe"];
let val = 0;
for(const key of keys){
    hashMap.set(key, val);
    val++;
}

console.log(hashMap.entries());
