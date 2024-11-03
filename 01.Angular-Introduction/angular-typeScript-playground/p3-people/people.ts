abstract class Employee{
    name: string;
    age: number;
    salary: number = 0;
    tasks: string[] = [];

    constructor(name: string, age: number, salary: number){
        this.name = name;
        this.age = age;
    }

    work(): void{
        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask ? currentTask : "");
        console.log(this.name + currentTask);
    }

    collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month`);
    }

    getSalary(): number {
        return this.salary;
    }
}

class Junior extends Employee {
    constructor(name: string, age: number, salary: number){
        super(name, age, salary);
        this.tasks.push(' is working on a simple task.');
    }
}

class Senior extends Employee {
    constructor(name: string, age: number, salary: number){
        super(name, age, salary);
        this.tasks.push(' is working on a complicated task.');
        this.tasks.push(' is taking time off work.');
        this.tasks.push(' is supervising junior workers.');
    }
}

class Manager extends Employee {
    divident: number = 0;

    constructor(name: string, age: number, salary: number){
        super(name, age, salary);
        this.tasks.push(' scheduled a meeting.');
        this.tasks.push(' is preparing a quarterly meeting.');
    }

    setDivident(divident: number): void{
        this.divident = divident;
    }

    getSalary(): number {
        return this.salary + this.divident;
    }
}

var manager = new Manager('Pesho', 46, 3000);

manager.work();
manager.work();
manager.work();
manager.work();
manager.setDivident(2000);
manager.collectSalary();

