export abstract class Shape {
    abstract calculateArea(): number;
}

export class ShapeCalculator {
    constructor (private shapes: Shape[]){}
    calculateTotalArea(): number {
      return this.shapes.reduce(
        (total, shape) => total + shape.calculateArea(),
        0
      );
    } 
}

export class Circle extends Shape {
    constructor (private radius: number) {
      super();
    }
    calculateArea(): number {
      return Math.PI * Math.pow(this.radius,2);
    }
}

export class Rectangle extends Shape {
    constructor (private height: number, private width: number) {
      super();
    }
    calculateArea(): number {
      return this.height * this.width;
    }
}

export class Triangle extends Shape {
    constructor (private length: number) {
      super();
    }
    calculateArea(): number {
      return 0.5*this.length*this.length;
    }
}

export class Square extends Shape {
    constructor (private side: number) {
      super();
    }
    calculateArea(): number {
      return this.side*this.side;
    }
}

export enum EmployeeType {
    FullTime,
    PartTime,
    Intern,
    Freelancer
}

export abstract class Employee {
  constructor(public name: string, public type: EmployeeType) {}
  abstract calculateSalary(): number;
}

export class FullTimeEmployee extends Employee {
    calculateSalary(): number {
      return 5000;
    }
}
export class PartTimeEmployee extends Employee {
    calculateSalary(): number {
      return 3000;
    }
}
export class InternEmployee extends Employee {
    calculateSalary(): number {
      return 1000;
    }
}
export class FreelancerEmployee extends Employee {
    constructor (name: string, type: EmployeeType, private workingTime: number){
      super(name, type);
    }
    calculateSalary(): number {
      return 40 * this.workingTime;
    }
}
