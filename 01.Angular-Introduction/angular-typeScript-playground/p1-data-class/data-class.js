var DataClass = /** @class */ (function () {
    function DataClass(method, uri, version, message) {
        this.fulfilled = false;
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
    return DataClass;
}());
var myData = new DataClass('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);