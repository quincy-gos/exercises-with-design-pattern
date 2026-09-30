export abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}

export abstract class OnlinePaymentProcessor extends PaymentProcessor {}

export class PayPalPayment extends OnlinePaymentProcessor {
    processPayment(amount: number): void {
      console.log(`Processing PayPal payment of $${amount}`);
      console.log("Redirecting to PayPal...");
      console.log("Completing PayPal transaction...");
    }
}

export class CreditCardPayment extends OnlinePaymentProcessor {
    processPayment(amount: number): void {
      console.log(`Processing credit card payment of $${amount}`);
      console.log("Validating credit card details...");
      console.log("Charging the credit card...");
    }
}

export class CashPayment extends PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing cash payment of $${amount}`);
    }
}

export function handleOnlinePayment(
    paymentProcessor: OnlinePaymentProcessor,
    amount: number
): void {
    paymentProcessor.processPayment(amount);
}

const creditCardPayment = new CreditCardPayment();
handleOnlinePayment(creditCardPayment, 100); 
const payPalPayment = new PayPalPayment();
handleOnlinePayment(payPalPayment, 200); 

const cashPayment = new CashPayment();
cashPayment.processPayment(50);