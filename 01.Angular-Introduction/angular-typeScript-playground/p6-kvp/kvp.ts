class KeyValuePair<T, U>{
    key: T
    value: U

    setKeyValue(key: T, value: U){
        this.key = key;
        this.value = value;
    }

    display(): string{
        return `key = ${this.key}, value = ${this.value}`;
    }

}

let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, "Steve");
console.log(kvp.display());
