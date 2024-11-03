abstract class Melon{
    public weight: number
    public melonSort: string

    constructor(weight: number, melonSort: string){
        this.weight = weight;
        this.melonSort = melonSort;
    }
}

class Watermelon extends Melon{
    elementIndex: number

    constructor(weight: number, melonSort: string){
        super(weight, melonSort);
        this.elementIndex = this.weight * this.melonSort.length;
    }

    getElementIndex(): number {
        return this.elementIndex;
    }

    toString(): string{
        var result = "Element: Water\r\n";
        result += `Sort: ${this.melonSort}\r\n`;
        result += `Element Index: ${this.getElementIndex()}`;
        return result;
    }
}

class Melolemonmelon extends Watermelon{


}

let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
