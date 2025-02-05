const {Node, LinkedList} = require('./linkedlist');


class HashMap {

    constructor(loadFactor=0.8){
      this.loadFactor = loadFactor;
      this.capacity = 16;
      this.size = 0;
      this.buckets = [];
      this.initBuckets();
    }

    initBuckets(){
      
      for(let i = 0; i < this.capacity; i++){
        this.buckets[i] = new LinkedList();
      }

    }

    hash(key){
      let hashCode = 0;

      const primeNum = 31;
      for (let i = 0; i < key.length; i++){
        hashCode = (primeNum * hashCode + key.charCodeAt(i)) % this.capacity;
      }
      return hashCode;
    }


    // if the key is already in the hashmap, update the value
    // else, create a new list node and append it to the bucket
    set(key, value){
      
      const hashCode = this.hash(key);
      let bucket = this.buckets[hashCode - 1];

      if (!bucket.contains(key)){
        const newNode = new Node(key, value);
        bucket.append(newNode)
        this.size += 1;

      } else {
        const listIndex = bucket.find(key);
        const node = bucket.at(listIndex);
        node.value = value;
      }

      
    }

    get(key){

      const hashCode = this.hash(key);
      let bucket = this.buckets[hashCode - 1];
      
      const listIndex = bucket.find(key);
      if(listIndex !== null){
        const node = bucket.at(listIndex);
        return node.value;
      }

      return null;
    }

}


module.exports = {
    HashMap
};

