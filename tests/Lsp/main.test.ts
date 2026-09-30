import {
  PayPalPayment,
  CreditCardPayment,
  CashPayment,
  handleOnlinePayment,
} from '../../Solid/3.Lsp/main';

describe('PayPalPayment', () => {
  it('should process PayPal payment', () => {
    const consoleSpy = jest
      .spyOn(console, 'log')
      .mockImplementation();

    const payment = new PayPalPayment();

    handleOnlinePayment(payment, 200);

    expect(consoleSpy).toHaveBeenCalledWith(
      'Processing PayPal payment of $200'
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      'Redirecting to PayPal...'
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      'Completing PayPal transaction...'
    );

    consoleSpy.mockRestore();
  });
});

describe('CreditCardPayment', () => {
  it('should process credit card payment', () => {
    const consoleSpy = jest
      .spyOn(console, 'log')
      .mockImplementation();

    const payment = new CreditCardPayment();

    handleOnlinePayment(payment, 100);

    expect(consoleSpy).toHaveBeenCalledWith(
      'Processing credit card payment of $100'
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      'Validating credit card details...'
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      'Charging the credit card...'
    );

    consoleSpy.mockRestore();
  });
});

describe('CashPayment', () => {
  it('should process cash payment', () => {
    const consoleSpy = jest
      .spyOn(console, 'log')
      .mockImplementation();

    const payment = new CashPayment();

    payment.processPayment(50);

    expect(consoleSpy).toHaveBeenCalledWith(
      'Processing cash payment of $50'
    );

    consoleSpy.mockRestore();
  });
});