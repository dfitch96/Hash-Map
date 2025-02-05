# Hash-Map

This project implements a HashMap in JavaScript.

Features:
- set(key, value): Adds a key-value pair to the hash map or updates an existing key.
- get(key): Retrieves the value associated with a given key.
- has(key): Checks if a key exists in the hash map.
- remove(key): Deletes a key-value pair from the hash map.
- clear(): Removes all key-value pairs from the hash map.
- keys(): Returns an array of all keys in the hash map.
- values(): Returns an array of all values in the hash map.
- entries(): Returns an array of key-value pairs in the hash map.
- length: Returns the total number of key-value pairs in the hash map.
- grow(): Expands the hash map when the load factor is exceeded to maintain efficiency.

This implementation uses a linked list for collision handling and dynamically resizes when necessary.
