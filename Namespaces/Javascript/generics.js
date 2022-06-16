"use strict";
class Add {
    constructor() {
        this.array = [];
    }
    getArray() {
        console.log(this.array);
    }
}
const instanceNumber = new Add();
instanceNumber.array.push(23);
instanceNumber.getArray();
const instanceString = new Add();
instanceString.array.push('instanceNumber');
instanceString.array.push('instanceNumber1');
instanceString.getArray();
