const {HashMap} = require('./hashmap');

describe("HashMap", () =>{

    let hashMap;

    beforeEach(() => {
        hashMap = new HashMap();
    });

    test("default hashmap should have load factor 0.8 and capacity 16", () => {
        expect(hashMap.capacity).toBe(16);
        expect(hashMap.loadFactor).toBe(0.8);
    });

    test("hash function should give different hashes for a majority of keys with identical characters", () => {
        expect(hashMap.hash("abca")).not.toBe(hashMap.hash("bcaa"));
        
    });
    
    test("empty key gives hash code of 0", () => {
        expect(hashMap.hash("")).toBe(0);
        
    });

    test("buckets should contain key at the index of the computed hashCode", () => {
        const key = "abca";
        const hashCode = hashMap.hash(key);
        hashMap.set(key, 5);
        expect(hashMap.buckets[hashCode - 1].contains(key)).toBe(true);
    });

    
    test("get function should return the value 5 for the key abca", () => {
        const key = "abca";
        hashMap.set(key, 5);
        expect(hashMap.get(key)).toBe(5);
    });

    test("set should correctly update the value of a key if the key is already inserted into the hashmap", () => {
        const key = "abca";
        hashMap.set(key, 5);
        hashMap.set(key, 10);
        expect(hashMap.get(key)).toBe(10);
    })

    test("set should correctly store key value pairs when there is a collision", () => {

        const key1 = "Rama";
        const key2 = "Sita";
        hashMap.set(key1, 1);
        hashMap.set(key2, 5);
        expect(hashMap.get(key1)).toBe(1);
        expect(hashMap.get(key2)).toBe(5);


    })


    test("get function should return null for keys that dont exist within the hashmap", () => {
        const key = "afdasf";
        expect(hashMap.get(key)).toBe(null);
    })

});