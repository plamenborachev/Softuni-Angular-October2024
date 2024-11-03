class User {
    private name: string;

    constructor(name: string){
        this.name = name;
    }

    sayHello(): string{
        return `${this.name} says hi!`
    }
}

const user = new User('Pesho');
console.log(user.sayHello());

