const {
  NODE_ENV: nodeEnv,
  US_SQUARE_APPLICATION_ID: usSquareApplicationId,
} = process.env;

if (nodeEnv !== 'production' && usSquareApplicationId === '') {
  throw Error('You need to provide a value for the US_SQUARE_APPLICATION_ID variable.');
}

class SqrPaymentForm {
  constructor() {
    this.paymentForm = null;
  }

  destroy() {
    this.paymentForm.destroy();
    this.paymentForm = null;
  }

  get() {
    return this.paymentForm;
  }

  build() {
    this.paymentForm.build();
  }

  create(handleNonceResponse) {
    const postalCode = {
      elementId: 'sq-postal-code',
      placeholder: '',
    };

    this.paymentForm = new SqPaymentForm({
      applicationId: usSquareApplicationId,
      inputClass: 'sq-input',
      inputStyles: [
        {
          color: '#365899',
          fontFamily: 'Arial, sans-serif',
          fontSize: '14px',
          padding: '.8em 0 .9em .71em',
        },
      ],
      cardNumber: {
        elementId: 'sq-card-number',
        placeholder: '•••• •••• •••• ••••',
      },
      cvv: {
        elementId: 'sq-cvv',
        placeholder: '',
      },
      expirationDate: {
        elementId: 'sq-expiration-date',
        placeholder: 'MM/YY',
      },
      postalCode,
      callbacks: {
        // Called when the SqPaymentForm completes a request to generate a card
        // nonce, even if the request failed because of an error.
        cardNonceResponseReceived: (errors, nonce, cardData) => {
          handleNonceResponse(errors, nonce, cardData);
        },

        unsupportedBrowserDetected: () => {
          // Fill in this callback to alert buyers when their browser is not supported.
        },

        // Fill in these cases to respond to various events that can occur while a
        // buyer is using the payment form.
        inputEventReceived: (inputEvent) => {
          switch (inputEvent.eventType) {
            case 'focusClassAdded':
              // Handle as desired
              break;
            case 'focusClassRemoved':
              // Handle as desired
              break;
            case 'errorClassAdded':
              // Handle as desired
              break;
            case 'errorClassRemoved':
              // Handle as desired
              break;
            case 'cardBrandChanged':
              // Handle as desired
              break;
            case 'postalCodeChanged':
              // Handle as desired
              break;
            default:
              break;
          }
        },

        paymentFormLoaded: () => {
          // Fill in this callback to perform actions after the payment form is
          // done loading (such as setting the postal code field programmatically).
          // paymentForm.setPostalCode('94103');
        },
      },
    });
    return this.paymentForm;
  }
}

export default new SqrPaymentForm();
