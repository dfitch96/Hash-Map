const {HashMap} = require('./hashmap');

describe("HashMap", () =>{

    let hashMap;

    beforeEach(() => {
        hashMap = new HashMap(0.5);
    });

    test("default hashmap should have load factor 0.8 and capacity 16", () => {
        expect(hashMap.capacity).toBe(16);
        expect(hashMap.loadFactor).toBe(0.5);
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
        expect(hashMap.buckets[hashCode].contains(key)).toBe(true);
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
    });

    test("set should correctly store key value pairs when there is a collision", () => {

        const key1 = "Rama";
        const key2 = "Sita";
        hashMap.set(key1, 1);
        hashMap.set(key2, 5);
        expect(hashMap.get(key1)).toBe(1);
        expect(hashMap.get(key2)).toBe(5);

    });


    test("get function should return null for keys that dont exist within the hashmap", () => {
        const key = "afdasf";
        expect(hashMap.get(key)).toBe(null);
    });

    test("has function returns true when the given key is in the hash map", () => {
        const key = "Rama";
        const key2 = "Sita";
        hashMap.set(key, 12);
        expect(hashMap.has(key)).toBe(true);
    });

    test("has function returns false when a given key is not in the hash map", () => {
        const key = "Rama";
        expect(hashMap.has(key)).toBe(false);
    });

    test("remove function return true when a key is found and removed from the hash map", () => {
        const key = "Rama";
        hashMap.set(key, 12);
        hashMap.remove(key);
        expect(hashMap.has(key)).toBe(false);

    });

    test("remove function no longer contains the key value pair after a key is removed from the hash map", () => {
        const key = "Rama";
        hashMap.set(key, 12);
        hashMap.remove(key);
        expect(hashMap.has(key)).toBe(false);
        expect(hashMap.get(key)).toBe(null);

    });

    test("length property returns correct length for an empty hash map", () => {
        expect(hashMap.length).toBe(0);
    });

    test("length property returns correct length after adding one key value pair", () => {
        const key = "Rama";
        hashMap.set(key, 12);
        expect(hashMap.length).toBe(1);
    });
    
    test("length property returns correct length after adding and removing one key value pair", () => {
        const key = "Rama";
        hashMap.set(key, 12);
        hashMap.remove(key);
        expect(hashMap.length).toBe(0);
    });

    test("length property returns correct length after updating the value of an already added key", () => {
        const key = "Rama";
        hashMap.set(key, 12);
        hashMap.set(key, 5);
        expect(hashMap.length).toBe(1);
    });

    test("clear function successfully removes all key value pairs", () => {
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

        hashMap.clear();

        for(const key of keys){
            expect(hashMap.has(key)).toBe(false);
        }

    });

    test("hash map contains multiple key value pairs", () => {
   
        const keys = ["Rama", "Sita", "Dylan", "Joe"];
        let val = 0;
        for(const key of keys){
            hashMap.set(key, val);
            val++;
        }

        for(const key of keys){
            expect(hashMap.has(key)).toBe(true);
        }

    });

    test("keys function returns the correct array of keys", () => {

        const keys = ["Rama", "Sita", "Dylan", "Joe"];
        let val = 0;
        for(const key of keys){
            hashMap.set(key, val);
            val++;
        }

        for(const key of hashMap.keys()){
            expect(keys.includes(key)).toBe(true);
        }

    });

    test("values function returns the correct array of values", () => {

        const keys = ["Rama", "Sita", "Dylan", "Joe"];
        const values = [];
        let val = 0;
        for(const key of keys){
            values.push(val);
            hashMap.set(key, val);
            val++;
        }

        for(const value of hashMap.values()){
            expect(values.includes(value)).toBe(true);
        }
    });


    test('set function adds key-value pairs and triggers grow correctly', () => {

        const initialCapacity = hashMap.capacity;
        for(let i = 0; i < initialCapacity / 2; i++){
            hashMap.set(`key_${i}`, i);
        }

        expect(hashMap.capacity).toBe(initialCapacity * 2);

        for(let i = 0; i < initialCapacity / 2; i++){
            expect(hashMap.get(`key_${i}`)).toBe(i);
        }
    });

});