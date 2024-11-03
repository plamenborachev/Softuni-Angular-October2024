class DataClass {
    method: string
    uri: string
    version: string
    message: string
    response: String
    fulfilled: boolean = false

    constructor(method: string, uri: string, version: string, message: string){
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
}

var myData = new DataClass('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);