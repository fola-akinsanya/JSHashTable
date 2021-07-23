const crypto = require("crypto");

class HashTable {
    backingArray = new Array(1000000);
    set(key, value) {
        const index = this.getIndex(key);
        this.backingArray[index] = value;
        return {key, value}
    }

    get(key) {
        const index = this.getIndex(key);
        return this.backingArray[index]
    }

    getIndex(key) {
        const hash = crypto.createHash("md5").update(key).digest("hex");
        const decimalHash = parseInt(hash, 16);
        return decimalHash % this.backingArray.length;
    }
}

const hashTable = new HashTable

const sonia = hashTable.set("Sonia", "07898349754")
console.log(sonia)

