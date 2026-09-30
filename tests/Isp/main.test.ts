import {
    OldFashionedPrinter,
    ModernPrinter,
} from '../../Solid/4.Isp/main';

describe('OldFashionedPrinter', () => {
    it('should print a document', () => {
        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation();

        const printer = new OldFashionedPrinter();

        printer.print('Document 1');

        expect(consoleSpy).toHaveBeenCalledWith(
            'Printing document: Document 1'
        );

        consoleSpy.mockRestore();
    });
});

describe('ModernPrinter', () => {
    it('should print a document', () => {
        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation();

        const printer = new ModernPrinter();

        printer.print('Document 1');

        expect(consoleSpy).toHaveBeenCalledWith(
            'Printing document: Document 1'
        );

        consoleSpy.mockRestore();
    });

    it('should scan a document', () => {
        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation();

        const printer = new ModernPrinter();

        printer.scan('Document 2');

        expect(consoleSpy).toHaveBeenCalledWith(
            'Scanning document: Document 2'
        );

        consoleSpy.mockRestore();
    });

    it('should fax a document', () => {
        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation();

        const printer = new ModernPrinter();

        printer.fax('Document 3');

        expect(consoleSpy).toHaveBeenCalledWith(
            'Faxing document: Document 3'
        );

        consoleSpy.mockRestore();
    });
});
