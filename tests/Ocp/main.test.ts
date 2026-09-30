import {
    Shape,
    ShapeCalculator,
    Circle,
    Rectangle,
    Triangle,
    Square,
    EmployeeType,
    FullTimeEmployee,
    PartTimeEmployee,
    InternEmployee,
    FreelancerEmployee,
} from '../../Solid/2.Ocp/main';

describe('Shape', () => {
    it('should calculate total area of all shapes', () => {
        const shapes: Shape[] = [
            new Circle(5),
            new Rectangle(4, 5),
            new Triangle(3),
            new Square(4),
        ];

        const calculator = new ShapeCalculator(shapes);

        expect(calculator.calculateTotalArea()).toBeCloseTo(
            25 * Math.PI + 20 + 4.5 + 16
        );
    });

    it('should return 0 when there are no shapes', () => {
        const calculator = new ShapeCalculator([]);

        expect(calculator.calculateTotalArea()).toBe(0);
    });
});

describe('Employee', () => {
    it('should calculate full-time salary', () => {
        const employee = new FullTimeEmployee(
            'Alice',
            EmployeeType.FullTime
        );

        expect(employee.calculateSalary()).toBe(5000);
    });

    it('should calculate part-time salary', () => {
        const employee = new PartTimeEmployee(
            'Bob',
            EmployeeType.PartTime
        );

        expect(employee.calculateSalary()).toBe(3000);
    });

    it('should calculate intern salary', () => {
        const employee = new InternEmployee(
            'Charlie',
            EmployeeType.Intern
        );

        expect(employee.calculateSalary()).toBe(1000);
    });

    it('should calculate freelancer salary based on working time', () => {
        const employee = new FreelancerEmployee(
            'Harry',
            EmployeeType.Freelancer,
            24
        );

        expect(employee.calculateSalary()).toBe(960);
    });
});