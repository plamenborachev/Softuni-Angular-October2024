var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elementIndex = _this.weight * _this.melonSort.length;
        return _this;
    }
    Watermelon.prototype.getElementIndex = function () {
        return this.elementIndex;
    };
    Watermelon.prototype.toString = function () {
        var result = "Element: Water\r\n";
        result += "Sort: ".concat(this.melonSort, "\r\n");
        result += "Element Index: ".concat(this.getElementIndex());
        return result;
    };
    return Watermelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Melolemonmelon;
}(Watermelon));
var watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
