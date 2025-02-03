

class HashMap {

    constructor(loadFactor=0.8, capacity=16){
      this.loadFactor = loadFactor;
      this.capacity = capacity;
    }

    hash(key){
      let hashCode = 0;

      const primeNum = 31;
      for (let i = 0; i < key.length; i++){
        hashCode = primeNum * hashCode + key.charCodeAt(i);
      }

      return hashCode;
    }

}


module.exports = {
    HashMap
};

