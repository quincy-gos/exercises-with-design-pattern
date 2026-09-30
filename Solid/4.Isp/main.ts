/**
 * *****************************************
 * 📝 UNCOMMENT THE CODE BELOW AND BEGIN YOUR SOLUTION:
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */
interface Print {
  print(document:string): void;
}

interface Scan {
  scan(document: string): void;
}

interface Fax {
  fax(document: string): void;
}

export class OldFashionedPrinter implements Print {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }
}

export class ModernPrinter implements Print, Scan, Fax {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }

  scan(document: string): void {
    console.log(`Scanning document: ${document}`);
  }

  fax(document: string): void {
    console.log(`Faxing document: ${document}`);
  }
}