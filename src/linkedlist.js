


class Node {
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
    }  
}


class LinkedList {

    #head;

    constructor(){
        this.#head = new Node();
        this.length = 0;
    }

    get len(){
        return this.length;   
    }

    head(){
        return this.#head.next
    }

    tail(){

        let cur = this.#head;
        while(cur.next){
            cur = cur.next;
        }

        return cur;
    }

    append(newNode){

        let cur = this.#head;
        while(cur.next){
            cur = cur.next;
        }
        cur.next = newNode;
        this.length += 1;
    }

    prepend(newNode){

        newNode.next = this.#head.next;
        this.#head.next = newNode;
        this.length += 1;
    }


    at(index){

        if (index >= this.length){
            return null;
        }

        let cur = this.#head.next;
        let i = 0;
        while(i != index){
            cur = cur.next;
            i++;
        }

        return cur;

    }

  

    pop(){

        if(this.#head.next === null){
            return null;
        }

        this.length--;

        let cur = this.#head.next;
        let prev = this.#head;
        while(cur.next){
            prev = cur;
            cur = cur.next;
        }

        prev.next = null;
        return cur;

    }

    contains(key){

        let cur = this.#head.next;
        while(cur){
            if(cur.key === key){
                return true;
            }
            cur = cur.next;
        }

        return false;
    }

    find(key){

        let cur = this.#head.next;
        let index = 0;
        while(cur){
            if(cur.key === key){
                return index;
            }
            cur = cur.next;
            index++;
        }

        return null;
    }

    insertAt(value, index){

        if(index >= this.length || index < 0){
            return;
        }

        this.length++;
        const newNode = new Node(value);
        let cur = this.#head.next;
        let prev = this.#head;
        let i = 0;
        while (i !== index){
            prev = cur;
            cur = cur.next;
            i++;
        }

        prev.next = newNode;
        newNode.next = cur;

    }

    removeAt(index){

        if(index >= this.length || index < 0){
            return;
        }

        this.length--;
        
        let cur = this.#head.next;
        let prev = this.#head;
        let i = 0;
        while (i !== index){
            prev = cur;
            cur = cur.next;
            i++;
        }

        prev.next = cur.next;

    }


    toString(){
        let str = ' ( HEAD ) -> ';
        let cur = this.#head.next;
        while(cur){
            str += `( ${cur.value} ) -> `;
            cur = cur.next;
        }
        str += ` ${cur}`;
        return str;
    }

}


module.exports = {
    Node,
    LinkedList
};


