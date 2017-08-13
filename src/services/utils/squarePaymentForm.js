/* eslint-disable no-console */
const applicationId = process.env.SQUARE_APPLICATION_ID;

if (applicationId === '') console.error('You need to provide a value for the applicationId variable.');

class SqrPaymentForm {
  constructor() {
    this.paymentForm = null;
    this.type = '';
    this.count = 0;
  }

  destroy() {
    this.paymentForm.destroy();
    this.paymentForm = null;
    console.log('%cDestroyed payment form.', 'background:pink;');
  }

  get() {
    return this.paymentForm;
  }

  build() {
    this.paymentForm.build();
    console.log('%cBuilt payment form.', 'background:lime;');
  }

  create(type, handleNonceResponse) {
    console.log('%cCreating payment form.', 'background:yellow;');
    let postalCode = null;
    this.type = type;
    this.countr += 1;

    if (type === 'renderWithZip') {
      postalCode = {
        elementId: 'sq-postal-code',
        placeholder: '99999',
      };
    } else if (type === 'renderWithoutZip') {
      postalCode = false;
    }
    this.paymentForm = new SqPaymentForm({ // eslint-disable-line
      applicationId,
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
        placeholder: 'CVV',
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
            default: break;
          }
        },

        paymentFormLoaded: () => {
          console.warn('FINISHED LOADING');
          // Fill in this callback to perform actions after the payment form is
          // done loading (such as setting the postal code field programmatically).
          // paymentForm.setPostalCode('94103');
        },
      },
    });
    console.log('%cthis.paymentForm.', 'background:orange;', this.paymentForm);
    return (this.paymentForm);
  }
}

export default new SqrPaymentForm();
