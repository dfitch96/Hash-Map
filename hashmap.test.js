const {HashMap} = require('./hashmap');

describe("HashMap", () =>{

    let hashMap;

    beforeEach(() => {
        hashMap = new HashMap();
    });

    test("Default hashmap should have load factor 0.8 and capacity 16", () => {
        expect(hashMap.capacity).toBe(16);
        expect(hashMap.loadFactor).toBe(0.8);
    });

});