interface NotificationService {
    send(message: string): void;
}

export class EmailService implements NotificationService {
    send(message: string): void {
        console.log(`Sending email with message: ${message}`);
    }
}

export class SMSService implements NotificationService {
    send(message: string): void {
        console.log(`Sending SMS with message: ${message}`);
    }
}

export class SendNotification {
    constructor(
        private notificationService: NotificationService
    ) {}

    sendNotification(message: string): void {
      this.notificationService.send(message);
    }
}
