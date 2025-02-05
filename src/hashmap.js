const {Node, LinkedList} = require('./linkedlist');


class HashMap {

    constructor(loadFactor=0.8){
      this.loadFactor = loadFactor;
      this.capacity = 16;
      this.size = 0;
      this.buckets = [];
      this.initBuckets();
    }

    get length(){
      return this.size;
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

    grow(){
     
      const entries = this.entries();
      this.capacity = this.capacity * 2;
      this.clear();

      for(const entry of entries){
        this.set(entry[0], entry[1]);
      }


    }

    // if the key is already in the hashmap, update the value
    // else, create a new list node and append it to the bucket
    set(key, value){

      if(this.size + 1 >= this.capacity * this.loadFactor){
        this.grow();
      }
      
      const hashCode = this.hash(key);
      const bucket = this.buckets[hashCode];

      if (!bucket.contains(key)){
        const newNode = new Node(key, value);
        bucket.append(newNode)
        this.size++;

      } else {
        const listIndex = bucket.find(key);
        const node = bucket.at(listIndex);
        node.value = value;
      }

      
    }

    get(key){

      const hashCode = this.hash(key);
      const bucket = this.buckets[hashCode];
      
      const listIndex = bucket.find(key);
      if(listIndex !== null){
        const node = bucket.at(listIndex);
        return node.value;
      }

      return null;
    }


    has(key){
      const hashCode = this.hash(key);
      const bucket = this.buckets[hashCode];
      return bucket.contains(key);
    }

    remove(key){

      const hashCode = this.hash(key);
      const bucket = this.buckets[hashCode];

      const listIndex = bucket.find(key);
      if(listIndex !== null){
        bucket.removeAt(listIndex);
        this.size--;
        return true;
      }

      return false;
    }

    clear(){

      for(let i = 0; i < this.capacity; i++){
        this.buckets[i] = new LinkedList();
      }

      this.size = 0;

    }

    keys(){

      const arr = [];
      for(let i = 0; i < this.capacity; i++){
        let cur = this.buckets[i].head();
        while(cur){
          arr.push(cur.key);
          cur = cur.next;
        }
      }

      return arr;

    }


    values(){
      const arr = [];
      for(let i = 0; i < this.capacity; i++){
        let cur = this.buckets[i].head();
        while(cur){
          arr.push(cur.value);
          cur = cur.next;
        }
      }

      return arr;
    }


    entries(){
      const arr = [];
      for(let i = 0; i < this.capacity; i++){
        let cur = this.buckets[i].head();
        while(cur){
          arr.push([cur.key, cur.value]);
          cur = cur.next;
        }
      }

      return arr;
    }

}


module.exports = {
    HashMap
};

