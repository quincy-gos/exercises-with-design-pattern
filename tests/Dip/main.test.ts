import {
    EmailService,
    SMSService,
    SendNotification,
} from '../../Solid/5.Dip/main';

describe('EmailService', () => {
    it('should send an email', () => {
        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation();

        const emailService = new EmailService();

        emailService.send('Hello via Email');

        expect(consoleSpy).toHaveBeenCalledWith(
            'Sending email with message: Hello via Email'
        );

        consoleSpy.mockRestore();
    });
});

describe('SMSService', () => {
    it('should send an SMS', () => {
        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation();

        const smsService = new SMSService();

        smsService.send('Hello via SMS');

        expect(consoleSpy).toHaveBeenCalledWith(
            'Sending SMS with message: Hello via SMS'
        );

        consoleSpy.mockRestore();
    });
});

describe('SendNotification', () => {
    it('should send notification using EmailService', () => {
        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation();

        const emailService = new EmailService();
        const notification = new SendNotification(emailService);

        notification.sendNotification('Email notification');

        expect(consoleSpy).toHaveBeenCalledWith(
            'Sending email with message: Email notification'
        );

        consoleSpy.mockRestore();
    });

    it('should send notification using SMSService', () => {
        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation();

        const smsService = new SMSService();
        const notification = new SendNotification(smsService);

        notification.sendNotification('SMS notification');

        expect(consoleSpy).toHaveBeenCalledWith(
            'Sending SMS with message: SMS notification'
        );

        consoleSpy.mockRestore();
    });
});
